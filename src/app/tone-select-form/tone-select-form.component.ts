import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { IndexWord, TonePattern } from 'src/assets/models/types';
import { StoreState } from '../shared/state';
import { applyTonePatternToWord } from '../shared/utils';
import { incrementCorrectCounter, incrementIncorrectCounter, incrementTotalCounter } from './actions/tone-select.actions';

@Component({
  selector: 'app-tone-select-form',
  templateUrl: './tone-select-form.component.html',
  styleUrls: ['./tone-select-form.component.scss'],
})
export class ToneSelectFormComponent implements OnInit, OnDestroy {
  @Output() selectNewWord = new EventEmitter<void>();
  subscriptions: Subscription[] = [];
  TonePattern = TonePattern;
  selectedIndexWord$: Observable<IndexWord | null>;
  correctTonePattern$: Observable<TonePattern | null>;
  correctTonePattern: TonePattern | null = null;
  applyTonePatternToWord = applyTonePatternToWord;
  trimmedWord: string = '';

  constructor(private store: Store<StoreState>) {
    this.correctTonePattern$ = this.store.select((state) => state.data.correctTonePattern);
    this.selectedIndexWord$ = this.store.select((state) => state.data.selectedIndexWord);
  }

  ngOnInit(): void {
    Object.values(TonePattern).forEach(tp => console.log(tp));
    this.subscriptions.push(
      this.correctTonePattern$
        .subscribe((tonePattern) => {
          this.correctTonePattern = tonePattern;
        }),
      this.selectedIndexWord$.subscribe(indexWord => {
        if (!indexWord) return;
        this.trimmedWord = indexWord[1].replace(/[,.;:—·]/gi, '');
      }),
      fromEvent(window, 'keydown').subscribe((event: Event) => {
        this.handleKeyDown(event as KeyboardEvent);
      })
    );
  }

  onSelectTone(tonePattern: TonePattern): void {
    if (tonePattern === this.correctTonePattern) {
      this.store.dispatch(incrementCorrectCounter());
    } else {
      this.store.dispatch(incrementIncorrectCounter());
    }
    this.store.dispatch(incrementTotalCounter());
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.onSelectTone(TonePattern.TONELESS);
        break;
      case '1':
        this.onSelectTone(TonePattern.OXYTONE_ACUTE);
        break;
      case '2':
        this.onSelectTone(TonePattern.PAROXYTONE);
        break;
      case '3':
        this.onSelectTone(TonePattern.PROPAROXYTONE);
        break;
      case '4':
        this.onSelectTone(TonePattern.PERISPOMENON);
        break;
      case '5':
        this.onSelectTone(TonePattern.PROPERISPOMENON);
        break;
      case '6':
        this.onSelectTone(TonePattern.PROPAROXYTONE_AND_OXYTONE);
        break;
      case '7':
        this.onSelectTone(TonePattern.PROPERISPOMENON_AND_OXYTONE);
        break;
      case '8':
        this.onSelectTone(TonePattern.OXYTONE_GRAVE);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
