import { Component, Injectable, OnInit } from '@angular/core';
import {
  applyTonePatternToWord,
  determineTonePattern,
  getNuclei,
  getRandomWord,
  removeWordAccents,
} from 'src/app/shared/utils';
import { KeyValue, KeyValuePipe } from '@angular/common';
import { articles } from 'src/assets/exercises/article.data';
import { Article, NominalForm, TonePattern } from 'src/assets/types';
import { StoreState } from '../shared/state';
import { Store } from '@ngrx/store';
import {
  incrementCorrectCounter,
  incrementIncorrectCounter,
  incrementTotalCounter,
  setCorrectCounter,
  setIncorrectCounter,
  setTotalCounter,
} from './actions/article.actions';

@Injectable()
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articles: Article[] = articles;
  selectedWord: Article | null = null;
  unaccentedWord: string | null = null;
  correctTonePattern: TonePattern | null = null;
  TonePattern = TonePattern;
  tonePatterns: TonePattern[] = [
    TonePattern.OXYTONE_ACUTE,
    TonePattern.PERISPOMENON,
    TonePattern.TONELESS,
  ];
  applyTonePatternToWord = applyTonePatternToWord;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.getNewWord();
    this.store.dispatch(setCorrectCounter({ correctCounter: 0 }));
    this.store.dispatch(setIncorrectCounter({ incorrectCounter: 0 }));
    this.store.dispatch(setTotalCounter({ totalCounter: 0 }));
  }

  getNewWord(): void {
    this.selectedWord = getRandomWord(this.articles);
    this.unaccentedWord = removeWordAccents(this.selectedWord.form);
    this.correctTonePattern = this.selectedWord.tone;
  }

  onSelectTone(tonePattern: TonePattern): void {
    if (tonePattern === this.correctTonePattern) {
      this.store.dispatch(incrementCorrectCounter());
    } else {
      this.store.dispatch(incrementIncorrectCounter());
    }
    this.store.dispatch(incrementTotalCounter());
    this.getNewWord();
  }

  onSelectNewWord(): void {
    this.getNewWord();
  }
}
