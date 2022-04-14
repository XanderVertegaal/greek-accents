import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IndexWord, TonePattern } from 'src/assets/types';
import { StoreState } from '../shared/state';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  correctCounter$: Observable<number>;
  incorrectCounter$: Observable<number>;
  correctTonePattern$: Observable<TonePattern | null>;
  selectedIndexWord$: Observable<IndexWord | null>;
  correctTonePattern: TonePattern | null = null;
  isAnswerCorrect: boolean | null = null;
  isGameOver = false;

  constructor(private store: Store<StoreState>) { 
    this.correctCounter$ = this.store.select((state) => state.score.correctCounter);
    this.incorrectCounter$ = this.store.select((state) => state.score.incorrectCounter);
    this.correctTonePattern$ = this.store.select((state) => state.data.correctTonePattern);
    this.selectedIndexWord$ = this.store.select((state) => state.data.selectedIndexWord);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.correctCounter$.subscribe(counter => {
        if (counter === 0) return;
        this.isAnswerCorrect = true;
      }),
      this.incorrectCounter$.subscribe(counter => {
        if (counter === 0) return;
        this.isAnswerCorrect = false;
      }),
      this.selectedIndexWord$.subscribe(() => {
        setTimeout(() => {
          this.isAnswerCorrect = null;
        }, 1500);
      }),
      this.correctTonePattern$.subscribe(tp => {
        this.correctTonePattern = tp;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
