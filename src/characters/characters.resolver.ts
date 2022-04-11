/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Character } from './schema/character.schema';
import { Characters } from './schema/characters.schema';
import { CharactersService } from './characters.service';
// import {
//     ApolloClient,
//     gql,
//     NormalizedCacheObject
//   } from '@apollo/client/core';
//    import { cache } from './cache';
import { Info } from '@nestjs/graphql';

import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
type Int = number;


@Resolver()
export class CharactersResolver {
  private client: any;
  private lastUpdated: any;
  constructor(private characterService: CharactersService) {
    this.client = new ApolloClient({
      uri: 'https://rickandmortyapi.com/graphql',
    });
    this.lastUpdated = Date.now()

  }

  // @Mutation(() => Character)
  // async createUser(@Args('input') input: Character) {
  //   return this.characterService.update(input);
  // }

  @Query(() => Characters)
  async characters(@Args('page') page: number, @Info() info) {
    const result = await this.characterService.find(page)
    console.log("result", result)
    // return  await this.characterService.find(page);


    console.log(Date.now() - this.lastUpdated)
    if (result.length != 0 && (Date.now() - this.lastUpdated > 60)) {


      const charWrapper = new Characters()
      charWrapper.results = result
      return charWrapper

      // return result

    } else {
      return this.client
        .query({
          query: gql`{characters( page : ${page}) {
              results {
                  id
                  name
                  image
                  species
                  status
                  gender
                  origin {
                      name
                  }
                  location { 
                      name
                      dimension
                  }
                  episode {
                      name    
                      air_date
                  }
              }
            }}`
        })
        .then(async result => {
          const results = <Characters>result.data.characters
          const idlist = results.results.map((element) => {
            return element.id
          })
          console.log(idlist)
          await this.characterService.findByIdListandRemove(idlist)
          // console.log("result ", results)
          // this is done async

          await this.characterService.create(results.results)
          this.lastUpdated = Date.now()

          return results
        });
    }
  }

  @Query(() => Characters)
  async getFavourites(@Args('favorites', { type: () => [String] }) favorites: string[], @Info() info) {
    // console.log(await this.characterService.findByIdList(favorites))
    const characterWrapper = new Characters()
    characterWrapper.results = await this.characterService.findByIdList(favorites)
    console.log(characterWrapper)
    return characterWrapper
  }


}
