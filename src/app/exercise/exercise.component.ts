import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameState, Assignment, TonePattern, WordClass, Answer } from 'src/assets/types';
import { CounterService } from '../services/counter.service';
import { MistakeService } from '../services/mistake.service';
import { getTargetForm, shuffle } from '../shared/utils';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent<W extends WordClass> {
  selectedAssignment: Assignment<W> | null = null;
  assignments: Assignment<W>[] = [];
  gameState: GameState = 'waiting';
  tonePattern = TonePattern;
  getTargetForm = getTargetForm;
  numberOfAssignments = 0;

  constructor(
    protected counterService: CounterService,
    private router: Router,
    private mistakeService: MistakeService
  ) { }

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
}
