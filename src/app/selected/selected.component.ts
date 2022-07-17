import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Casus, Genus, Numerus } from 'src/assets/types';
import { StoreState } from '../shared/state';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  @Input() selectedWord: string | null = null;
  @Input() hints: [Casus, Numerus, Genus] | null = null;
  showHints = true;
  isAnswerCorrect: boolean | undefined;


  constructor(private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.store.select(state => state.exercise.answerStatus).subscribe(status => this.isAnswerCorrect = status);
  }

}
