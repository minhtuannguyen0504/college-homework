import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCounterState = createFeatureSelector<number>('counter'); // This 'counter' matches the key in StoreModule.forRoot
export const selectCounter = createSelector(
  selectCounterState,
  (state: number) => state
);
