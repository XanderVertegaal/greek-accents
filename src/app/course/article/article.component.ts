import { Component, OnInit } from '@angular/core';
import { getRandomWord } from 'src/app/shared/utils';
import { articles } from 'src/assets/exercises/article.data';
import { NominalForm } from 'src/assets/types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles: NominalForm[] = articles;

  constructor() { }

  ngOnInit(): void {
    
  }

}
