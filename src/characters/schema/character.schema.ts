/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Episode } from './episode.scehma';
import { Location } from './location.schema';

export type CharacterDocument = Character & Document;

@Schema({toJSON: { virtuals: true }, toObject: { virtuals: true }})
@ObjectType()
export class Character {


  @Prop()
  @Field({nullable: true})
  id: string

  @Prop()
  @Field({nullable: true})
  name: string

  @Prop()
  @Field({nullable: true})
  status: string

  @Prop()
  @Field({nullable: true})
  species: string

  @Prop()
  @Field({nullable: true})
  type: string

  @Prop()
  @Field({nullable: true})
  gender: string

  @Prop()
  @Field({nullable: true})
  origin: Location

  @Prop()
  @Field({nullable: true})
  location: Location

  @Prop()
  @Field({nullable: true})
  image: string

  @Prop()
  @Field( type => [Episode],{nullable: true})
  episode: Episode[]

  // @Prop()
  // @Field(type=>[String],{nullable: true})
  // users: string[]

}

export const CharacterSchema = SchemaFactory.createForClass(Character);