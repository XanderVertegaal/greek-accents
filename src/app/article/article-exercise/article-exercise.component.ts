import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StoreState} from 'src/app/shared/state';
import {
  applyTonePatternToWord,
  getRandomWord,
  QuestionType} from 'src/app/shared/utils';
import {articles} from 'src/assets/exercises/article.data';
import {Article, TonePattern} from 'src/assets/types';
import {
  incrementCorrectCounter,
  incrementIncorrectCounter,
  incrementTotalCounter,
  resetAllCounters
} from 'src/app/article/actions/article.actions';
import { answerIsCorrect, answerIsIncorrect, answerReset, setSelectedArticle } from './actions/article-exercise.actions';

@Component({
  selector: 'app-article-exercise',
  templateUrl: './article-exercise.component.html',
  styleUrls: ['./article-exercise.component.scss']
})
export class ArticleExerciseComponent implements OnInit {
  articles: Article[] = articles;
  selectedArticle: Article | null = null;
  displayWord: string | null = null;
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = [
    TonePattern.OXYTONE_ACUTE,
    TonePattern.PERISPOMENON,
    TonePattern.TONELESS
  ];
  applyTonePatternToWord = applyTonePatternToWord;
  questionType = QuestionType;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(resetAllCounters());
    this.getNewWord();
  }

  getNewWord(): void {
    this.selectedArticle = getRandomWord(this.articles);
    this.displayWord = this.selectedArticle.form;
    this.store.dispatch(setSelectedArticle({ article: this.selectedArticle }));
  }

  onReceiveAnswerStatus(isAnswerCorrect: boolean): void {
    if (!this.displayWord || !this.selectedArticle) {
      return;
    }
    if (isAnswerCorrect === true) {
      this.store.dispatch(incrementCorrectCounter());
      this.displayWord = applyTonePatternToWord(this.displayWord, this.selectedArticle.tone);
      this.store.dispatch(answerIsCorrect());
      setTimeout(() => {
        this.store.dispatch(answerReset());
        this.getNewWord();
      }, 1500);
    } else {
      this.store.dispatch(incrementIncorrectCounter());
      this.displayWord = applyTonePatternToWord(this.displayWord, this.selectedArticle.tone);
      this.store.dispatch(answerIsIncorrect());
      setTimeout(() => {
        this.store.dispatch(answerReset());
        this.getNewWord();
      }, 1500);
    }
    this.store.dispatch(incrementTotalCounter());
  }

  onSelectNewWord(): void {
    this.getNewWord();
  }

}
