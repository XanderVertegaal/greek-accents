import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { ExerciseService } from 'src/app/services/exercise.service';
import { QuestionType} from 'src/app/shared/utils';
import {AnswerState, Article, TonePattern} from 'src/assets/types';


@Component({
  selector: 'app-article-exercise',
  templateUrl: './article-exercise.component.html',
  styleUrls: ['./article-exercise.component.scss']
})
export class ArticleExerciseComponent implements OnInit, OnDestroy {
  selectedArticle: Article | null = null;
  answerState: AnswerState = 'waiting';
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = [
    TonePattern.OXYTONE_ACUTE,
    TonePattern.PERISPOMENON,
    TonePattern.TONELESS
  ];
  questionType = QuestionType;
  private subscriptions: Subscription[] = [];

  constructor(
    private counterService: CounterService,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.exerciseService.selectedArticle$.subscribe(article => this.selectedArticle = article)
    );

    this.counterService.resetCounters();
    this.exerciseService.selectNewArticle();
  }

  getNewWord(): void {
    this.exerciseService.selectNewArticle();
  }

  onReceiveAnswerStatus(isAnswerCorrect: boolean): void {
    if (!this.selectedArticle) {
      return;
    }
    if (isAnswerCorrect === true) {
      this.counterService.incrementCounter('correct');
      this.answerState = 'correct';
    } else {
      this.counterService.incrementCounter('incorrect');
      this.answerState = 'incorrect';
    }
    this.counterService.incrementCounter('total');
    setTimeout(() => {
      this.answerState = 'waiting';
      this.getNewWord();
    }, 1500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
