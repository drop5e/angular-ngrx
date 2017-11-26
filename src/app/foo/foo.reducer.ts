import { Action } from '@ngrx/store';
import * as FooActions from './foo.actions';

export function fooReducer(state: FooActions.User[] = [], action: FooActions.All) {
	switch (action.type) {
		case FooActions.GET_USERS:
            return state;
        case FooActions.GET_USERS_SUCCESS:
            return action.payload;
        case FooActions.GET_USERS_ERROR:
            return state;
        case FooActions.ADD_USER:
			return [ ...state, action.payload ];
		default:
			return state;
	}
}