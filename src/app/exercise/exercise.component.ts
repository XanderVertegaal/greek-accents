import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { GameState, Assignment, TonePattern, WordClass, Answer } from 'src/assets/types';
import { CounterService } from '../services/counter.service';
import { MistakeService } from '../services/mistake.service';
import { getTargetForm, shuffle } from '../shared/utils';

@Directive()
export abstract class ExerciseComponent<W extends WordClass> implements OnInit, OnDestroy {
  selectedAssignment: Assignment<W> | null = null;
  assignments: Assignment<W>[] = [];
  gameState: GameState = 'waiting';
  tonePattern = TonePattern;
  getTargetForm = getTargetForm;
  numberOfAssignments = 0;
  gameStart$ = new Subject<Assignment<W>[]>();
  private subscriptions: Subscription[] = [];

  constructor(
    protected counterService: CounterService,
    private router: Router,
    private mistakeService: MistakeService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.gameStart$.pipe().subscribe(assignments => {
        console.log('Game start!');
        this.counterService.resetCounters();
        this.assignments = assignments;
        this.numberOfAssignments = assignments.length;
        this.selectNewAssignment();
      })
    );
    this.generateAssignments();
  }

  onReceiveAnswerStatus(answer: Answer): void {
    if (!this.selectedAssignment) {
      return;
    }
    if (answer.isCorrect === true) {
      this.selectedAssignment.finished = true;
      this.counterService.incrementCounter('correct');
      this.gameState = 'correct';
    } else {
      this.counterService.incrementCounter('incorrect');
      this.gameState = 'incorrect';
      this.numberOfAssignments++;
      this.mistakeService.mistakes.push({
        assignment: this.selectedAssignment,
        incorrectInput: answer.enteredForm
      });
    }
    this.counterService.incrementCounter('total');
    setTimeout(() => {
      this.gameState = 'waiting';
      this.selectNewAssignment({shuffle: true});
    }, 1500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  protected selectNewAssignment(options: { shuffle: boolean } = { shuffle: false }): void {
    const unfinishedAssignments = this.assignments.filter(assignment => assignment.finished === false);
    if (unfinishedAssignments.length === 0) {
      this.router.navigate(['/', 'course', 'summary']);
    }
    if (options.shuffle === true) {
      shuffle(unfinishedAssignments);
    }
    this.selectedAssignment = unfinishedAssignments.pop() ?? null;
  }

  // A generic solution will not work:
  //
  // generateAssignments<W extends WordClass>: Assignment<W>[]
  //
  // Source: https://stackoverflow.com/questions/69783310/type-is-assignable-to-the-constraint-of-type-t-but-t-could-be-instantiated
  //
  // I would like this to mean: if input = Article, output = Article.
  // However, type identity between input and output is not enforced in TS right now.
  protected abstract generateAssignments(): void;
}
