
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserDTO {
    username: string;
}

export class User {
    username: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(input: UserDTO): User | Promise<User>;
}

type Nullable<T> = T | null;
