import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const counterFeatureKey = 'counter';

export interface CounterState {
  value: number
}

export const reducers: ActionReducerMap<CounterState> = {
  value: undefined
};

export const initialState: CounterState = {
  value: 0
};

const counterReducer = createReducer(
  initialState,
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
