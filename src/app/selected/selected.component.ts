import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Assignment, GameState, Hint, WordClass } from 'src/assets/types';
import { getNominativeSg, getTargetForm } from '../shared/utils';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnChanges {
  @Input() selectedAssignment: Assignment<WordClass> | null = null;
  @Input() gameState: GameState = 'waiting';
  @Input() showHints = true;
  @Input() showBaseForm = true;
  hints: Hint[] | null = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAssignment'] && this.selectedAssignment !== null) {
      this.hints = this.getHints(this.selectedAssignment);
    }
  }

  getHints(assignment: Assignment<WordClass>): Hint[] {
    const hints: Hint[] = [];
    if (assignment.word.type === 'article' || assignment.word.type === 'substantive') {
      hints.push(assignment.word.case, assignment.word.gramNumber, assignment.word.gender);
    } else {
      hints.push(
        assignment.word.modus,
        assignment.word.tempus,
        assignment.word.diathesis,
        assignment.word.gramNumber,
        assignment.word.persona
      );
    }
    return hints;
  }

  getDisplayForm(selectedAssignment: Assignment<WordClass>): string {
    if (selectedAssignment.question === 'write-word' && this.gameState === 'waiting') {
      return getNominativeSg(selectedAssignment.word);
    } else {
      return getTargetForm(selectedAssignment.word);
    }
  }
}
