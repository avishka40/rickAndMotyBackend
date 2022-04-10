/* eslint-disable prettier/prettier */
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { elementAt } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(input: User): Promise<User> {
    return this.userModel.create(input);
  }
  

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }
  callback = (error,doc) =>{
    console.log(doc)
    return doc
  }
  async setFavorites(name: string, id:string): Promise<UserDocument> {
        const char = await this.userModel.findOne({username: name})
        console.log("char", char)
        if(char.favorites.length==0 || char.favorites== null){
          char.favorites = [id]
        }else {
           
          if(char.favorites.find(element => element===id)){
            char.favorites =  char.favorites.filter(element=> element!=id)
          }else {
            char.favorites.push(id)
          }
        }
        console.log("char after", char)
         await this.userModel.findOneAndUpdate({username: name},{favorites: char.favorites})
         return char
      }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
