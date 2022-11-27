import { Component, OnInit } from '@angular/core';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { CounterService } from 'src/app/services/counter.service';
import { generateNewFirstDeclensionAssignments } from 'src/app/shared/utils';
import { Substantive } from 'src/assets/types';

@Component({
  selector: 'app-first-declension-exercise',
  templateUrl: '../../exercise/exercise.component.html',
  styleUrls: ['../../exercise/exercise.component.scss']
})
export class FirstDeclensionExerciseComponent extends ExerciseComponent<Substantive> implements OnInit {
  constructor(counterService: CounterService) {
    super(counterService);
  }

  ngOnInit(): void {
    this.counterService.resetCounters();
    this.assignments = generateNewFirstDeclensionAssignments(10);
    this.selectNewAssignment();
  }
}
