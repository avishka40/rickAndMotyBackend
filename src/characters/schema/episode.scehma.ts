/* eslint-disable prettier/prettier */
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EpisodeDocument = Episode & Document;

@ObjectType()
// @InputType()
export class Episode {
  @Prop()
  @Field({nullable: true})
  name: string;

//   @Prop()
//   @Field()
//   id: string

  @Prop()
  @Field({nullable: true})
  air_date: string

}
