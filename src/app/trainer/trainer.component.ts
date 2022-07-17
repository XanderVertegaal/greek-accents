import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IndexWord, Text, TonePattern } from 'src/assets/types';
// eslint-disable-next-line max-len
import { setCorrectTonePattern, setSelectedIndexWord, incrementCorrectCounter, incrementIncorrectCounter, incrementTotalCounter, resetAllCounters, answerIsCorrect, answerReset, answerIsIncorrect } from './actions/trainer.actions';
import { StoreState } from '../shared/state';
import { applyTonePatternToWord, determineTonePattern, getNuclei, getRandomWord, removeWordAccents } from '../shared/utils';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit, OnDestroy {
  applyTonePatternToWord = applyTonePatternToWord;

  subscriptions: Subscription[] = [];

  accentedText: IndexWord[] | null = null;
  displayText: IndexWord[] | null = null;
  selectedAuthor = '';
  selectedWork = '';
  selectedPassage = '';

  selectedIndexWord$: Observable<IndexWord | null>;
  selectedIndexWord: IndexWord | null = null;
  correctCounter$: Observable<number>;
  totalCounter$: Observable<number>;
  selectedText$: Observable<Text | null>;

  correctTonePattern: TonePattern | null = null;
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  isAnswerCorrect: boolean | null = null;
  isGameOver = false;

  correct: IndexWord[] = [];

  constructor(
    private store: Store<StoreState>,
  ) {
    this.selectedIndexWord$ = this.store.select(state => state.trainer.selectedIndexWord);
    this.totalCounter$ = this.store.select(state => state.score.totalCounter);
    this.correctCounter$ = this.store.select(state => state.score.correctCounter);
    this.selectedText$ = this.store.select(state => state.trainer.selectedText);
  }

  ngOnInit(): void {
    this.store.dispatch(resetAllCounters());
    this.subscriptions.push(
      this.selectedText$.subscribe((text: Text | null) => {
        if (text === null) {
          return;
        }
        const splitText = text.text.split(' ');
        const unaccentedText = splitText.map((word) =>
          removeWordAccents(word).replace(/[,.;:—·]/gi, '')
        );
        this.accentedText = Array.from(splitText.entries());
        this.displayText = Array.from(unaccentedText.entries());
        this.selectedAuthor = text.author;
        this.selectedWork = text.work;
        this.selectedPassage = text.passage;
        this.onSelectNewWord();
      }),

      this.selectedIndexWord$.subscribe((indexWordPair) => {
        if (!indexWordPair || !this.accentedText) {
          return;
        }
        this.selectedIndexWord = indexWordPair;
        this.correct.push(this.accentedText[indexWordPair[0]]);
        const currentIndex = this.selectedIndexWord[0];
        this.correctTonePattern = determineTonePattern(getNuclei(this.accentedText[currentIndex][1]));
        this.store.dispatch(setCorrectTonePattern({ tonePattern: this.correctTonePattern }));
      }),

      this.correctCounter$.subscribe((correctCounter) => {
        if (correctCounter === 0) {
          return;
        }
        if (this.accentedText && this.selectedIndexWord) {
          this.displayText?.splice(
            this.selectedIndexWord[0],
            1,
            this.accentedText[this.selectedIndexWord[0]]
          );
          this.selectedIndexWord = this.accentedText[this.selectedIndexWord[0]];
        }
      }),

      this.totalCounter$.subscribe((counter) => {
        if (counter === 0) {
          return;
        }
        setTimeout(() => {
          this.onSelectNewWord();
        }, 1500);
      })
    );
  }

  onSelectTone(tonePattern: TonePattern) {
    if (tonePattern === this.correctTonePattern) {
      this.store.dispatch(incrementCorrectCounter());
    } else {
      this.store.dispatch(incrementIncorrectCounter());
    }
    this.store.dispatch(incrementTotalCounter());
  }

  onSelectNewWord(): void {
    if (!this.displayText) {
      return;
    }
    const unseenWords = this.displayText.filter(
      (word) => !this.correct.includes(word)
    );
    if (this.correct.length > 0 && unseenWords.length === 0) {
      this.isGameOver = true;
    } else {
      this.store.dispatch(
        setSelectedIndexWord({ indexWord: getRandomWord(unseenWords) })
      );
    }
  }

  onClickWord(indexWord: IndexWord): void {
    if (!this.correct.includes(indexWord)) {
      this.store.dispatch(setSelectedIndexWord({ indexWord }));
    }
  }

  onReceiveAnswerStatus(isAnswerCorrect: boolean): void {
    if (isAnswerCorrect === true) {
      this.store.dispatch(incrementCorrectCounter());
      this.store.dispatch(answerIsCorrect());
      setTimeout(() => {
        this.store.dispatch(answerReset());
      }, 1500);
    } else {
      this.store.dispatch(incrementIncorrectCounter());
      this.store.dispatch(answerIsIncorrect());
      setTimeout(() => {
        this.store.dispatch(answerReset());
      }, 1500);
    }
    this.store.dispatch(incrementTotalCounter());
    this.onSelectNewWord();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
