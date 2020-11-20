import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../interfaces/user';

export const loadUsers = createAction(
  '[Users List Component] Load Users'
);

export const loadUsersSucess = createAction(
  '[Users List Effect] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users List Effect] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[User List Component] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User Effect] Load User Success',
  props<{ selectedUser: User }>()
);

export const loadUserFailure = createAction(
  '[User Effect] Load User Failure',
  props<{ error: any }>()
);

export const addUser = createAction(
  '[User Add Component] Add User',
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  '[User Add Effect] Add User Success',
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  '[User Add Effect] Add User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction(
  '[User Edit Component] Update User',
  props<{ user: Update<User> }>()
);

export const deleteUser = createAction(
  '[User Component] Delete User',
  props<{ id: string }>()
);
export const deleteUserSuccess = createAction(
  '[User Delete Effect] Delete User Success',
  props<{ id: string }>()
);

export const deleteUserFailure = createAction(
  '[Userr Delete Effect] Delete User Failure',
  props<{ error: any }>()
);
