/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@ObjectType()
// @InputType()
export class Location {
  @Prop()
  @Field({nullable: true})
  name: string;

//   @Prop()
//   @Field()
//   id: string

  @Prop()
  @Field({nullable: true})
  dimension: string

}
