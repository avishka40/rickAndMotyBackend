/* eslint-disable prettier/prettier */
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UserDTO } from "src/dto/user.dto";

import { UserService } from "../user/user.service";
import { User } from "./user.schema";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args("input") input: UserDTO) {
    return this.userService.create(input);
  }

  @Query(() => [User])
  async users() {
    return this.userService.find();
  }

  @Query(() => User)
  async getUser(@Args("username") username: string) {
    return this.userService.findOne({ username: username });
  }

  @Mutation(() => User)
  async setFavourite(@Args("username") username: string,
   @Args("id") id: string) {
   const user =  this.userService.setFavorites(username,id);
   console.log("user ",user)
   return user
  }
}
