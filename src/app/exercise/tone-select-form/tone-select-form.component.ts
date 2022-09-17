import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { TonePattern } from 'src/assets/types';
import { StoreState } from '../../shared/state';
import { applyTonePatternToWord, removeWordAccents } from '../../shared/utils';

@Component({
  selector: 'app-tone-select-form',
  templateUrl: './tone-select-form.component.html',
  styleUrls: ['./tone-select-form.component.scss'],
})
export class ToneSelectFormComponent implements OnInit, OnDestroy {
  @Output() answerIsCorrect = new EventEmitter<boolean>();
  subscriptions: Subscription[] = [];
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);

  targetForm: string | null = null;
  targetTonePattern: TonePattern | null = null;

  applyTonePatternToWord = applyTonePatternToWord;

  constructor(private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.store.select(state => state.exercise.selectedForm).subscribe(article => {
      if (article === undefined) {
        return;
      }
      this.targetForm = article.form;
      this.targetTonePattern = article.tone;
    });

    this.store.select(state => state.trainer.selectedIndexWord).subscribe(indexWord => {
      if (indexWord == null) {
        return;
      }
      this.targetForm = removeWordAccents(indexWord[1]);
    });

    this.store.select(state => state.trainer.correctTonePattern).subscribe(tp => {
      this.targetTonePattern = tp;
    });

    this.subscriptions.push(
      fromEvent(window, 'keydown').subscribe((event: Event) => {
        this.handleKeyDown(event as KeyboardEvent);
      })
    );
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.selectTone(TonePattern.TONELESS);
        break;
      case '1':
        this.selectTone(TonePattern.OXYTONE_ACUTE);
        break;
      case '2':
        this.selectTone(TonePattern.PAROXYTONE);
        break;
      case '3':
        this.selectTone(TonePattern.PROPAROXYTONE);
        break;
      case '4':
        this.selectTone(TonePattern.PERISPOMENON);
        break;
      case '5':
        this.selectTone(TonePattern.PROPERISPOMENON);
        break;
      case '6':
        this.selectTone(TonePattern.PROPAROXYTONE_AND_OXYTONE);
        break;
      case '7':
        this.selectTone(TonePattern.PROPERISPOMENON_AND_OXYTONE);
        break;
      case '8':
        this.selectTone(TonePattern.OXYTONE_GRAVE);
    }
  }

  selectTone(tone: TonePattern): void {
    if (!this.targetTonePattern) {
      return;
    }
    const correctTone = this.targetTonePattern;
    if (tone === correctTone) {
      this.answerIsCorrect.emit(true);
    } else {
      console.log('False!');
      this.answerIsCorrect.emit(false);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
