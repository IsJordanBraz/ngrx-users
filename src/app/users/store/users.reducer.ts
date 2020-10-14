import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Users } from '../models/users';
import * as UsersActions from './users.actions';

export const usersesFeatureKey = 'userses';

export interface UserState extends EntityState<Users> {
  error: any
}

export const adapter: EntityAdapter<Users> = createEntityAdapter<Users>();

export const initialState: UserState = adapter.getInitialState({
  error: undefined
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
  // on(UsersActions.deleteUsers,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(UsersActions.upsertUsers,
  //   (state, action) => adapter.upsertOne(action.users, state)
  // ),
  // on(UsersActions.addUserss,
  //   (state, action) => adapter.addMany(action.userss, state)
  // ),
  // on(UsersActions.upsertUserss,
  //   (state, action) => adapter.upsertMany(action.userss, state)
  // ),
  // on(UsersActions.updateUserss,
  //   (state, action) => adapter.updateMany(action.userss, state)
  // ),
  // on(UsersActions.deleteUserss,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),  
  // on(UsersActions.clearUserss,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
