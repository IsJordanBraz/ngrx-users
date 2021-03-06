import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '../interfaces/user';
import * as UsersActions from '../actions/user.actions';

export const usersesFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  error: any;
  selectedUser: User;
}

// eslint-disable-next-line func-style, prefer-arrow/prefer-arrow-functions
export function selectUserId(user: User): number {
  return user.id;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId
});

export const initialState: UserState = adapter.getInitialState({
  error: undefined,
  selectedUser: undefined
});

const usersReducer = createReducer(
  initialState,
  on(UsersActions.addUserSuccess, (state, action) =>
    adapter.addOne(action.user, state),
  ),
  on(UsersActions.addUserFailure, (state, action) => ({
        ...state,
        error: action.error
      })
  ),
  on(UsersActions.loadUsersSucess, (state, action) =>
    adapter.setAll(action.users, state)
  ),
  on(UsersActions.loadUsersFailure, (state, action) => ({
        ...state,
        error: action.error
      })
  ),
  on(UsersActions.loadUserSuccess, (state, action) => ({
        ...state,
        selectedUser: action.selectedUser
      })
  ),
  on(UsersActions.loadUserFailure, (state, action) => ({
        ...state,
        error: action.error
      })
  ),
  on(UsersActions.updateUser, (state, action) =>
    adapter.updateOne(action.user, state)
  ),
  on(UsersActions.deleteUserSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(UsersActions.deleteUserFailure, (state, action) => ({
        ...state,
        error: action.error
      })
  ),
);

// eslint-disable-next-line func-style, prefer-arrow/prefer-arrow-functions
export function reducer(state: UserState | undefined, action: Action) {
  return usersReducer(state, action);
}
export const getUser = (state: UserState) => state.selectedUser;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
