import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './reducers';
import { CounterComponent } from './counter.component';

@NgModule({
  declarations: [CounterComponent],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, {})
  ]
})
export class CounterModule { }
