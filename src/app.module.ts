/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path'
import { CharactersModule } from './characters/characters.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.development.env',
    load: [configuration],
  }),
  MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION_STRING),
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    installSubscriptionHandlers: true,
    autoSchemaFile: 'schema,.gql',
    playground: true,
    // typePaths: ['./**/*.graphql'],
    // definitions: {
    //     path: join(process.cwd(), 'src/graphql.ts'),
    //     outputAs: 'class'
    // },
    // buildSchemaOptions: {
    //   numberScalarMode: 'integer'
    // }
  }), UserModule, CharactersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
