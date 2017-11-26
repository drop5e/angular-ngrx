import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { of } from 'rxjs/observable/of';

import * as FooActions from './foo.actions';
import { User } from './foo.actions';

@Injectable()
export class FooEffects {

  constructor(
    private http: HttpClient,
    private actions: Actions
  ) {}

  @Effect() 
  getUsers: Observable<Action> = this.actions.ofType(FooActions.GET_USERS)
    .mergeMap((action: FooActions.GetUsers) =>
        this.http
            .get('http://localhost:3000/user')
            .map((data: User[]) => new FooActions.GetUsersSuccess(data))
            .catch((error) => of(new FooActions.GetUsersError(error)))
    );

}