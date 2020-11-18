import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectAll, usersesFeatureKey, UserState } from '../reducers/user.reducer';

export const selectUsersState = createFeatureSelector<UserState>(
    usersesFeatureKey
);

export const selectUsers = createSelector(selectUsersState, selectAll);
export const selectedUser = createSelector(selectUsersState, (state: UserState) => state.selectedUser);
