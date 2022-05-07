import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreState} from 'src/app/shared/state';
import {
  applyTonePatternToWord,
  getRandomWord} from 'src/app/shared/utils';
import {articles} from 'src/assets/exercises/article.data';
import {Article, TonePattern} from 'src/assets/types';
import {
  incrementCorrectCounter,
  incrementIncorrectCounter,
  incrementTotalCounter,
  resetAllCounters
} from 'src/app/article/actions/article.actions';
import { answerIsCorrect, answerIsIncorrect, answerReset, setSelectedWord } from './actions/article-exercise.actions';

@Component({
  selector: 'app-article-exercise',
  templateUrl: './article-exercise.component.html',
  styleUrls: ['./article-exercise.component.scss']
})
export class ArticleExerciseComponent implements OnInit {
  articles: Article[] = articles;
  selectedArticle: Article | null = null;
  TonePattern = TonePattern;
  tonePatterns: TonePattern[] = [
    TonePattern.OXYTONE_ACUTE,
    TonePattern.PERISPOMENON,
    TonePattern.TONELESS
  ];
  showHints = false;
  applyTonePatternToWord = applyTonePatternToWord;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(resetAllCounters());
    this.getNewWord();
  }

  getNewWord(): void {
    this.selectedArticle = getRandomWord(this.articles);
    this.store.dispatch(setSelectedWord({word: this.selectedArticle}));
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
    this.getNewWord();
  }

  onSelectNewWord(): void {
    this.getNewWord();
  }

}
