import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, switchMap } from 'rxjs';
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
    this.correctTonePattern$ = this.store.select((state) => state.trainer.correctTonePattern);
    this.selectedIndexWord$ = this.store.select((state) => state.trainer.selectedIndexWord);
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
        this.isAnswerCorrect = null;
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
