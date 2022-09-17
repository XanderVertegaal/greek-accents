import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Casus, Genus, Numerus } from 'src/assets/types';
import { StoreState } from '../shared/state';
import { removeWordAccents } from '../shared/utils';
import { TrimPipe } from '../trim.pipe';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  @Input() hints: [Casus, Numerus, Genus] | null = null;
  showHints = true;
  displayForm: string | null = null;
  isAnswerCorrect: boolean | undefined;


  constructor(
    private store: Store<StoreState>,
    private trim: TrimPipe
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.exercise.answerIsCorrect).subscribe(status => this.isAnswerCorrect = status);
    this.store.select(state => state.trainer.selectedIndexWord).subscribe(indexWord => {
      if (indexWord !== null) {
        this.displayForm = this.trim.transform(removeWordAccents(indexWord[1]));
      }
    });
  }

}
