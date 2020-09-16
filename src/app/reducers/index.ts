import {ActionReducerMap} from "@ngrx/store";
import * as fromCounter from '../counter/reducers';
import {AppState} from "../shared/appstate";

export var reducers: ActionReducerMap<AppState> = {
  [fromCounter.counterFeatureKey]: fromCounter.reducer
}
