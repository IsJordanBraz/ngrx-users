import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, usersesFeatureKey, UserState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UserState>(
    usersesFeatureKey
);

export const selectUsers = createSelector(selectUsersState, selectAll);