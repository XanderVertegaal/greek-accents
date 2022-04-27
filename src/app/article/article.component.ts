import { Component, OnInit } from '@angular/core';
import {
  determineTonePattern,
  getNuclei,
  getRandomWord,
  removeWordAccents,
} from 'src/app/shared/utils';
import { articles } from 'src/assets/exercises/article.data';
import { NominalForm, TonePattern } from 'src/assets/types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articles: NominalForm[] = articles;
  selectedWord: NominalForm | null = null;
  unaccentedWord: string | null = null;
  correctTonePattern: TonePattern | null = null;
  tonePatterns: TonePattern[] = [
    TonePattern.OXYTONE_ACUTE,
    TonePattern.PERISPOMENON,
    TonePattern.TONELESS,
  ];

  constructor() {}

  ngOnInit(): void {
    this.getNewWord();
  }

  getNewWord(): void {
    this.selectedWord = getRandomWord(this.articles);
    this.unaccentedWord = removeWordAccents(this.selectedWord.form);
    this.correctTonePattern = determineTonePattern(
      getNuclei(this.selectedWord.form)
    );
  }

  onSelectTone(tonePattern: string): void {}
}
