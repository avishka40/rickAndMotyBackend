/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character, CharacterDocument } from './schema/character.schema';

  


@Injectable()
export class CharactersService {
    constructor(
        @InjectModel(Character.name) private characterModel: Model<CharacterDocument>,
      ) {
       
      }


      async create(input: Character[]): Promise<CharacterDocument[]> {
        //change this to updatemany with upsert
        return this.characterModel.insertMany(input);
      }
      
      

      async find(page: number): Promise<Character[]> {
        const skip = (page -1) * 20
        const limit = 10
        //to do pagination
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return this.characterModel.find().skip(skip).limit(limit).exec()
      }

      async findByIdList(ids: string[]): Promise<Character[]> {

        return this.characterModel.find({id: {$in:ids}});
      }

      async findByIdListandRemove(ids: string[]): Promise<Character[]> {

        return this.characterModel.deleteMany({id: {$in:ids}});
      }
}
