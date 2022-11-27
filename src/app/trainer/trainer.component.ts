import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, first, map, share, Subscription } from 'rxjs';
import { GameState, IndexWord, Text, TonePattern } from 'src/assets/types';
import { CounterService } from '../services/counter.service';
import { TrainerService } from '../services/trainer.service';
import { CorpusService } from '../services/corpus.service';
import { applyTonePatternToWord, determineTonePattern, getNuclei, notEmpty } from '../shared/utils';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit, OnDestroy {
  applyTonePatternToWord = applyTonePatternToWord;

  texts: Text[] = [];
  selectedText = new FormControl<Text | null>(null);
  accentedText: IndexWord[] | null = null;
  selectedIndexWord: IndexWord | null = null;

  targetTonePattern: TonePattern | null = null;
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  gameState: GameState = 'waiting';
  isGameOver = false;
  correct: IndexWord[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private counterService: CounterService,
    private trainerService: TrainerService,
    private corpusService: CorpusService
  ) { }

  ngOnInit(): void {
    this.counterService.resetCounters();

    const selectedText$ = this.selectedText.valueChanges.pipe(share());

    const accentedText$ = selectedText$.pipe(
      filter(notEmpty),
      map(text => text.text.split(' ')),
      map(textArray => Array.from(textArray.entries()))
    );

    this.subscriptions.push(
      this.corpusService.texts$.subscribe(texts => this.texts = texts),

      selectedText$.subscribe(() => {
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
      this.gameState = 'correct';
      this.correct.push(this.selectedIndexWord);
    } else {
      this.counterService.incrementCounter('incorrect');
      this.gameState = 'incorrect';
    }
    this.counterService.incrementCounter('total');
    setTimeout(() => {
      this.gameState = 'waiting';
      this.onSelectNewWord();
    }, 1500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
