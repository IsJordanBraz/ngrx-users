import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '../models/users';
import * as UsersActions from './user.actions';

export const usersesFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  error: any;
  selectedUser: User;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  error: undefined,
  selectedUser: undefined
});


export const reducer = createReducer(
  initialState,
  on(UsersActions.addUserSuccess, (state, action) => 
    adapter.addOne(action.user, state),
  ),
  on(UsersActions.addUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(UsersActions.loadUsersSucess,
    (state, action) => adapter.setAll(action.users, state)
  ),
  on(UsersActions.loadUsersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),  
  on(UsersActions.loadUserSuccess,
    (state, action) => {
      return {
        ...state,
        selectedUser: action.selectedUser
      }
    }
  ),
  on(UsersActions.loadUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(UsersActions.updateUser,
    (state, action) => adapter.updateOne(action.user, state)
  ),  
  on(UsersActions.deleteUserSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UsersActions.deleteUserFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
