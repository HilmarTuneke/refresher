import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";
import { selectCounterValue } from "./reducers/counter.selectors";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value = 0;

  storeValue$: Observable<number> = this.store$.pipe(select(selectCounterValue), tap(console.log));

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  reset() {
    this.value = 0;
  }

  incrementValue(diff: number) {
    this.value += diff;
  }
}
