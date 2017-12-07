import { Action } from '@ngrx/store';
import * as FooActions from './foo.actions';

const initialState = {
    users: [],
    selected: {},
    deleted: {}
}

export function fooReducer(state = initialState, action: FooActions.All) {
	switch (action.type) {
		case FooActions.GET_USERS:
            return state;
        case FooActions.GET_USERS_SUCCESS:
            return { ...state, users: action.payload };
        case FooActions.GET_USERS_ERROR:
            return state;
        case FooActions.ADD_USER:
            return { ...state, users: action.payload };
        case FooActions.SELECT_USER:
            return { ...state, deleted: action.payload, selected: action.payload };
        case FooActions.DELETE_USER:
			return { ...state, deleted: action.payload };
		default:
			return state;
	}
}