/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Character } from './character.schema';


export type CharactersDocument = Characters & Document;

@Schema({toJSON: { virtuals: true }, toObject: { virtuals: true }})
@ObjectType()
export class Characters {


  @Prop()
  @Field(type => [Character],{nullable: true})
  results: Character[]

}

export const CharacterSchema = SchemaFactory.createForClass(Characters);