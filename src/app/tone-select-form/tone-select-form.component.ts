import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { Article, NominalForm, TonePattern } from 'src/assets/types';
import { StoreState } from '../shared/state';
import { applyTonePatternToWord } from '../shared/utils';

@Component({
  selector: 'app-tone-select-form',
  templateUrl: './tone-select-form.component.html',
  styleUrls: ['./tone-select-form.component.scss'],
})
export class ToneSelectFormComponent implements OnInit, OnDestroy {
  @Output() answerIsCorrect = new EventEmitter<boolean>();
  subscriptions: Subscription[] = [];
  TonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  
  selectedWord: Article | NominalForm | undefined = undefined;
  
  applyTonePatternToWord = applyTonePatternToWord;

  constructor(private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.store.select(state => state.exercise.selectedWord).subscribe(word => this.selectedWord = word);
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
    if (!this.selectedWord) {
      return;
    }
    const correctTone = this.selectedWord.tone;
    if (tone === correctTone) {
      this.answerIsCorrect.emit(true);
    } else {
      this.answerIsCorrect.emit(false);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
