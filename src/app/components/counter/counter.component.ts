import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
} from '../../state/actions/counter.actions';
import { selectCounter } from '../../state/selectors/counter.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `<div>
    <h1>Counter: {{ counter$ | async }}</h1>
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()">Decrement</button>
    <button (click)="onReset()">Reset</button>
  </div>`,
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter$: Observable<Number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounter);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
