/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({toJSON: { virtuals: true }, toObject: { virtuals: true }})
@ObjectType()
export class User {
  @Prop()
  @Field()
  username: string;

  @Prop()
  @Field(type=>[String],{nullable: true})
  favorites: string[]

}

export const UserSchema = SchemaFactory.createForClass(User);