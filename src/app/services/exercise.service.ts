import { Injectable } from '@angular/core';
import { articles } from 'dist/greek-accents/assets/exercises/article.data';
import { BehaviorSubject } from 'rxjs';
import { Article } from 'src/assets/types';
import { getRandomItem } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  articles: Article[] = articles;
  selectedArticle$ = new BehaviorSubject<Article | null>(null);

  constructor() { }

  selectNewArticle(): void {
    this.selectedArticle$.next(getRandomItem(this.articles));
  }
}
