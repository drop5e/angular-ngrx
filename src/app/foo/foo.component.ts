import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as FooActions from './foo.actions';

interface AppState {
  foo: FooActions.User;
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  users: Observable<FooActions.User>;
  selected: Observable<FooActions.User>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new FooActions.GetUsers());
    this.users = store.select(state => state.foo.users);
    this.selected = store.select(state => state.foo.selected);
    this.deleted = store.select(state => state.foo.deleted);
  }

  ngOnInit() {
  }

  selectUser(user) {
    this.store.dispatch(new FooActions.SelectUser(user));
  }

  deleteUser(user) {
    console.log('delete: ', user)
    this.store.dispatch(new FooActions.DeleteUser(user));
  }

}
