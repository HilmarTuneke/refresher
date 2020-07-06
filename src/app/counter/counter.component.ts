import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import { selectCounterValue } from "./reducers/counter.selectors";
import * as CounterActions from './reducers/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value: number = 0;

  storeValue$: Observable<number> = this.store$.pipe(select(selectCounterValue), tap(console.log));

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  resetValue() {
    this.value = 0;
  }

  incrementValue(diff: number) {
    this.value += diff;
  }

  incrementStore(diff: number) {
    this.store$.dispatch(CounterActions.increment({change: diff}))
  }
  decrementStore(diff: number) {
    this.store$.dispatch(CounterActions.decrement({change: diff}))
  }
  resetStore() {
    this.store$.dispatch(CounterActions.reset())
  }
}
