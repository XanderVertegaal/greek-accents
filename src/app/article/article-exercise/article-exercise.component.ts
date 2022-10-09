import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { CounterService } from 'src/app/services/counter.service';
import { generateNewArticleAssignments } from 'src/app/shared/utils';
import {Article} from 'src/assets/types';


@Component({
  selector: 'app-article-exercise',
  templateUrl: '../../exercise/exercise.component.html',
  styleUrls: ['../../exercise/exercise.component.scss']
})
export class ArticleExerciseComponent extends ExerciseComponent<Article> implements OnInit {

  constructor(counterService: CounterService) {
    super(counterService);
  }

  ngOnInit(): void {
    this.counterService.resetCounters();
    this.assignments = generateNewArticleAssignments(5);
    this.selectNewAssignment();
  }

}
