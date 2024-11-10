import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../store/user.store';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => {
    return state.users;
  }
);

export const selectCount = createSelector(
  selectUserState,
  (state: UserState) => {
    return state.count;
  }
);

export const selectLoading = createSelector(
  selectUserState,
  (state: UserState) => {
    return state.loading;
  }
);

export const selectError = createSelector(
  selectUserState,
  (state: UserState) => {
    return state.error;
  }
);
