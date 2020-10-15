import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/users';
import * as UsersActions from './users.actions';

export const usersesFeatureKey = 'userses';

export interface UserState extends EntityState<User> {
  error: any
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  error: undefined,
});


export const reducer = createReducer(
  initialState,
  on(UsersActions.addUsersSuccess, (state, action) => 
    adapter.addOne(action.users, state),
  ),
  on(UsersActions.addUsersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(UsersActions.loadUserssSucess,
    (state, action) => adapter.setAll(action.userss, state)
  ),
  on(UsersActions.loadUserssFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),  
  on(UsersActions.updateUsers,
    (state, action) => adapter.updateOne(action.users, state)
  ),  
  on(UsersActions.deleteUsersSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UsersActions.deleteUsersFailure,
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
