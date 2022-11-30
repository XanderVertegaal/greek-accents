import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { articles } from 'src/assets/exercises/article.data';
import { Assignment, Casus, GameState, Hint, Numerus, WordClass } from 'src/assets/types';
import { applyTonePatternToWord, declineFirstDeclensionSubstantive, getNominativeSg, getTargetForm } from '../shared/utils';

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
  baseForm: string | null = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAssignment'] && this.selectedAssignment !== null) {
      this.hints = this.getHints(this.selectedAssignment);
      this.baseForm = this.getBaseFormString(this.selectedAssignment.word);
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

  getBaseFormString(word: WordClass): string | null {
    if (word.type === 'article' || word.type === 'substantive') {
      const article = articles.find(art =>
        art.gender === word.gender &&
        art.case === Casus.NOMINATIVE &&
        art.gramNumber === Numerus.SINGULAR);
      if (!article) {
        return null;
      }
      return `
      ${applyTonePatternToWord(article.baseForm, article.baseTone)} 
      ${declineFirstDeclensionSubstantive(word, Casus.NOMINATIVE, Numerus.SINGULAR)}
      `;
    }
    return null;
  }
}
