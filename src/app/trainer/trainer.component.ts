import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, first, map, Subscription } from 'rxjs';
import { AnswerState, IndexWord, Text, TonePattern } from 'src/assets/types';
import { CounterService } from '../services/counter.service';
import { TrainerService } from '../services/trainer.service';
import { applyTonePatternToWord, determineTonePattern, getNuclei, notEmpty } from '../shared/utils';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit, OnDestroy {
  applyTonePatternToWord = applyTonePatternToWord;

  selectedText: Text | null = null;

  accentedText: IndexWord[] | null = null;
  selectedIndexWord: IndexWord | null = null;

  targetTonePattern: TonePattern | null = null;
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  answerState: AnswerState = 'waiting';
  isGameOver = false;
  correct: IndexWord[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private counterService: CounterService,
    private trainerService: TrainerService,
  ) { }

  ngOnInit(): void {
    this.counterService.resetCounters();

    const accentedText$ = this.trainerService.selectedText$.pipe(
      filter(notEmpty),
      map(text => text.text.split(' ')),
      map(textArray => Array.from(textArray.entries()))
    );


    this.subscriptions.push(
      this.trainerService.selectedText$.subscribe(text => {
        this.selectedText = text;
        this.onSelectNewWord();
      }),

      accentedText$.subscribe(text => this.accentedText = text),

      accentedText$.pipe(first()).subscribe(text => {
        this.trainerService.selectNewIndexWord(text);
      }),

      this.trainerService.selectedIndexWord$.pipe(
        filter(notEmpty)
      ).subscribe(indexWord => {
        if (!this.accentedText) {
          return;
        }
        this.selectedIndexWord = indexWord;
        this.targetTonePattern = determineTonePattern(getNuclei(indexWord[1]));
      })
    );
  }

  onSelectNewWord(): void {
    if (!this.accentedText) {
      return;
    }
    const unseenWords = this.accentedText.filter(word => !this.correct.includes(word));
    if (this.correct.length > 0 && unseenWords.length === 0) {
      this.isGameOver = true;
    } else {
      this.trainerService.selectNewIndexWord(unseenWords);
    }
  }

  onClickWord(indexWord: IndexWord): void {
    if (!this.correct.includes(indexWord)) {
      this.trainerService.selectedIndexWord$.next(indexWord);
    }
  }

  onReceiveAnswerStatus(isAnswerCorrect: boolean): void {
    if (!this.selectedIndexWord) {
      return;
    }

    if (isAnswerCorrect === true) {
      this.counterService.incrementCounter('correct');
      this.answerState = 'correct';
      this.correct.push(this.selectedIndexWord);
    } else {
      this.counterService.incrementCounter('incorrect');
      this.answerState = 'incorrect';
    }
    this.counterService.incrementCounter('total');
    setTimeout(() => {
      this.answerState = 'waiting';
      this.onSelectNewWord();
    }, 1500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
