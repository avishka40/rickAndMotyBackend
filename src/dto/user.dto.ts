/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';




@InputType()
export class UserDTO {
 
  @Field()
  username: string;

  @Field(type=>[String],{defaultValue:[]})
  favorites: string[];

}
