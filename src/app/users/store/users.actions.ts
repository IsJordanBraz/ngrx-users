import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../models/users';

export const loadUserss = createAction(
  '[Users List Component] Load Userss'
);

export const loadUserssSucess = createAction(
  '[Users List Effect] Load Userss Sucess',
  props<{ userss: User[] }>()
);

export const loadUserssFailure = createAction(
  '[Users List Effect] Load Userss Failure',
  props<{ error: any }>()
);

export const addUsers = createAction(
  '[Users Add Component] Add Users',
  props<{ users: User }>()
);

export const addUsersSuccess = createAction(
  '[Users Add Effect] Add Users Success',
  props<{ users: User }>()
);

export const addUsersFailure = createAction(
  '[Users Add Effect] Add Users Failure',
  props<{ error: any }>()
);

export const updateUsers = createAction(
  '[Users Edit Component] Update Users',
  props<{ users: Update<User> }>()
);

export const deleteUsers = createAction(
  '[Users Component] Delete Users',
  props<{ id: string }>()
);
export const deleteUsersSuccess = createAction(
  '[Users Delete Effect] Delete Users Success',
  props<{ id: string }>()
);

export const deleteUsersFailure = createAction(
  '[Users Delete Effect] Delete Users Failure',
  props<{ error: any }>()
);
