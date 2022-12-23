import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseComponent } from 'src/app/exercise/exercise.component';
import { CounterService } from 'src/app/services/counter.service';
import { MistakeService } from 'src/app/services/mistake.service';
import {
  declineFirstDeclensionSubstantive,
  determineTonePattern,
  getNuclei,
  getRandomEnumValue,
  getRandomItem
} from 'src/app/shared/utils';
import { firstDeclensionSubstantives } from 'src/assets/exercises/first-decl-subst.data';
import { Assignment, Casus, Numerus, Question, Substantive } from 'src/assets/types';

@Component({
  selector: 'app-first-declension-exercise',
  templateUrl: '../../exercise/exercise.component.html',
  styleUrls: ['../../exercise/exercise.component.scss']
})
export class FirstDeclensionExerciseComponent extends ExerciseComponent<Substantive> implements OnInit {
  constructor(counterService: CounterService, router: Router, mistake: MistakeService) {
    super(counterService, router, mistake);
  }

  protected generateAssignments(amount = 20): void {
    const newAssignments: Assignment<Substantive>[] = [];
    const randomSubstantives: Substantive[] = [];
    let i = 0;
    const words: string[] = [];

    while (i < amount) {
      const randomLexeme = getRandomItem(firstDeclensionSubstantives);
      const randomCase = getRandomEnumValue(Casus);
      const randomNumber = getRandomEnumValue(Numerus);
      const word = declineFirstDeclensionSubstantive(randomLexeme, randomCase, randomNumber);

      // Try again if no word can be declined or if the word is already included.
      if (!word || words.includes(word)) {
        continue;
      }

      words.push(word);
      i = i + 1;

      const newSubstantive: Substantive = {
        type: 'substantive',
        inflectedForm: word,
        baseForm: randomLexeme.baseForm,
        baseTone: randomLexeme.baseTone,
        case: randomCase,
        gender: randomLexeme.gender,
        gramNumber: randomNumber,
        inflectedTone: determineTonePattern(getNuclei(word)),
        translation: randomLexeme.translation,
        exception: randomLexeme.exception
      };
      randomSubstantives.push(newSubstantive);
    }

    randomSubstantives.forEach(substantive => {
      newAssignments.push({
        finished: false,
        question: getRandomEnumValue(Question),
        word: substantive
      });
    });
    this.gameStart$.next(newAssignments);
  }
}
