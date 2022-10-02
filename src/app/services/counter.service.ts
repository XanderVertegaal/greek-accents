import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, pairwise } from 'rxjs';
import { CounterState } from 'src/assets/types';

const initialCounter: CounterState = {
  correct: 0,
  incorrect: 0,
  total: 0
};

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter$ = new BehaviorSubject<CounterState>(initialCounter);

  constructor() { }


  incrementCounter(counterName: keyof CounterState): void {
    const currValue = this.counter$.value[counterName];
    this.setCounter(counterName, currValue + 1);
  }

  getCounters(): CounterState {
    return this.counter$.value;
  }

  setCounters(counters: CounterState): void {
    this.counter$.next({ ...counters });
  }

  watchCounter$(counterName: keyof CounterState): Observable<number> {
    return this.counter$.pipe(
      pairwise(),
      filter(([prev, curr]) => prev[counterName] !== curr[counterName]),
      map(([, curr]) => curr[counterName])
      );
    }

  watchCounters$(): Observable<CounterState> {
    return this.counter$;
  }

  resetCounters(): void {
    this.counter$.next(initialCounter);
  }

  private getCounter(counterName: keyof CounterState): number {
    return this.counter$.value[counterName];
  }

  private setCounter(counterName: keyof CounterState, value: number): void {
    this.counter$.next({ ...this.counter$.value, [counterName]: value });
  }
}
