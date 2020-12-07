import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/actions/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  public count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>
  ) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  public increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  public decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  public reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }

}
