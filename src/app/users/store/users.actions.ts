import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Users } from '../models/users';

export const loadUserss = createAction(
  '[Users List Component] Load Userss'
);

export const loadUserssSucess = createAction(
  '[Users List Effect] Load Userss Sucess',
  props<{ userss: Users[] }>()
);

export const loadUserssFailure = createAction(
  '[Users List Effect] Load Userss Failure',
  props<{ error: any }>()
);

// ADD USERS 
export const addUsers = createAction(
  '[Users Add Component] Add Users',
  props<{ users: Users }>()
);

export const addUsersSuccess = createAction(
  '[Users Add Effect] Add Users Success',
  props<{ users: Users }>()
);

export const addUsersFailure = createAction(
  '[Users Add Effect] Add Users Failure',
  props<{ error: any }>()
);

export const updateUsers = createAction(
  '[Users Edit Component] Update Users',
  props<{ users: Update<Users> }>()
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
// export const updateUserss = createAction(
//   '[Users/API] Update Userss',
//   props<{ userss: Update<Users>[] }>()
// );

// export const upsertUsers = createAction(
//   '[Users/API] Upsert Users',
//   props<{ users: Users }>()
// );

// export const addUserss = createAction(
//   '[Users/API] Add Userss',
//   props<{ userss: Users[] }>()
// );

// export const upsertUserss = createAction(
//   '[Users/API] Upsert Userss',
//   props<{ userss: Users[] }>()
// );
// export const deleteUserss = createAction(
//   '[Users/API] Delete Userss',
//   props<{ ids: string[] }>()
// );

// export const clearUserss = createAction(
//   '[Users/API] Clear Userss'
// );
