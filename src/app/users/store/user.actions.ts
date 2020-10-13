import { createAction, props } from '@ngrx/store';
import { Users } from '../models/users';

export const loadUsers = createAction(
  '[User List Component] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User Effect] Load Users Success',
  props<{ users: Users[] }>()
);

export const loadUsersFailure = createAction(
  '[User Effect] Load Users Failure',
  props<{ error: any }>()
);
