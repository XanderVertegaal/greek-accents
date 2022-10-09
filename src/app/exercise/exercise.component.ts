import { Component } from '@angular/core';
import { GameState, Assignment, TonePattern, WordClass } from 'src/assets/types';
import { CounterService } from '../services/counter.service';
import { applyTonePatternToWord, shuffle } from '../shared/utils';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent<W extends WordClass> {
  selectedAssignment: Assignment<W> | null = null;
  assignments: Assignment<W>[] = [];
  gameState: GameState = 'waiting';
  isGameOver = false;
  tonePattern = TonePattern;

  constructor(
    protected counterService: CounterService
  ) { }

  onReceiveAnswerStatus(isAnswerCorrect: boolean): void {
    if (!this.selectedAssignment) {
      return;
    }
    if (isAnswerCorrect === true) {
      this.selectedAssignment.finished = true;
      this.counterService.incrementCounter('correct');
      this.gameState = 'correct';
    } else {
      this.counterService.incrementCounter('incorrect');
      this.gameState = 'incorrect';
    }
    this.counterService.incrementCounter('total');
    setTimeout(() => {
      this.gameState = 'waiting';
      this.selectNewAssignment({shuffle: true});
    }, 1500);
  }

  getTargetForm(wordClass: W): string {
    if ('tone' in wordClass) {
      return applyTonePatternToWord(wordClass.form, wordClass.tone) ?? '';
    }
    return wordClass.form;    // With verbs, we want to apply recessive accentuation here etc.
  }

  protected selectNewAssignment(options: { shuffle: boolean } = { shuffle: false }): void {
    const unfinishedAssignments = this.assignments.filter(assignment => assignment.finished === false);
    if (unfinishedAssignments.length === 0) {
      this.isGameOver = true;
    }

    if (options.shuffle === true) {
      shuffle(unfinishedAssignments);
    }

    this.selectedAssignment = unfinishedAssignments.pop() ?? null;
  }

}
