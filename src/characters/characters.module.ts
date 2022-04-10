/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersResolver } from './characters.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Character,CharacterSchema } from './schema/character.schema';
// 

@Module({
  providers: [CharactersService, CharactersResolver],
  imports: [MongooseModule.forFeature([{name: Character.name, schema: CharacterSchema}])],
  exports: [CharactersService]
})
export class CharactersModule {}
