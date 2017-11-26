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

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new FooActions.GetUsers());
    this.users = store.select('foo');
  }

  ngOnInit() {
  }

  private fooClick() {
    console.log('fooClick')
    let user = {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    };
    this.store.dispatch(new FooActions.AddUser(user));
  }

}
