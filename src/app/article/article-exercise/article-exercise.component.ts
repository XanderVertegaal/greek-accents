import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { CounterService } from 'src/app/services/counter.service';
import { MistakeService } from 'src/app/services/mistake.service';
import { getRandomEnumValue } from 'src/app/shared/utils';
import { articles } from 'src/assets/exercises/article.data';
import {Article, Assignment, Question} from 'src/assets/types';


@Component({
  selector: 'app-article-exercise',
  templateUrl: '../../exercise/exercise.component.html',
  styleUrls: ['../../exercise/exercise.component.scss']
})
export class ArticleExerciseComponent extends ExerciseComponent<Article> implements OnInit {

  constructor(counterService: CounterService, router: Router, mistake: MistakeService) {
    super(counterService, router, mistake);
  }

  protected generateAssignments(amount = 20): void {
    const newAssignments: Assignment<Article>[] = [];
    const shuffledArticles = [...articles].sort(() => 0.5 - Math.random());
    const randomArticles = shuffledArticles.slice(0, amount);
    randomArticles.forEach(art => {
      newAssignments.push({
        word: art,
        question: getRandomEnumValue(Question),
        finished: false
      });
    });
    this.gameStart$.next(newAssignments);
  }
}
