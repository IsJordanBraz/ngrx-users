import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Users } from '../models/users';
import { loadUsersFailure, loadUsersSuccess } from './user.actions';

export const userStateFeatureKey = 'userState';

export interface UsersState extends EntityState<Users> {
  error: any;
}

export const adapter: EntityAdapter<Users> = createEntityAdapter<Users>();

export const initialState = adapter.getInitialState({
  error: undefined
});

export const reducers = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return adapter.setAll(action.users, state)
  }),
  on(loadUsersFailure, (state, action) => {
    return {
      error: action.error
    }
  })
)

export const selectUsersFeature = createFeatureSelector<UsersState>(userStateFeatureKey);
 
export const selectUsers = createSelector(
  selectUsersFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.error
);

export const metaReducers: MetaReducer<UsersState>[] = !environment.production ? [] : [];
