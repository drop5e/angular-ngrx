import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const GET_USERS = '[User] Get';
export const GET_USERS_SUCCESS = '[User] Get Success';
export const GET_USERS_ERROR = '[User] Get Error';

export const ADD_USER = '[User] Add';
export const SELECT_USER = '[User] Select';
export const DELETE_USER = '[User] Delete';

export class GetUsers implements Action {
    readonly type = GET_USERS;
}

export class GetUsersSuccess implements Action {
    readonly type = GET_USERS_SUCCESS;
    constructor(public payload: User[]) {}
}

export class GetUsersError implements Action {
    readonly type = GET_USERS_ERROR;
    constructor(public payload: HttpErrorResponse) {}
}

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {}
}

export class SelectUser implements Action {
    readonly type = SELECT_USER;
    constructor(public payload: User) {}
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: User) {}
}

export type All = GetUsers | GetUsersSuccess | GetUsersError | AddUser | SelectUser | DeleteUser;