import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreState } from '../shared/state';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  correctCounter$: Observable<number>;
  incorrectCounter$: Observable<number>;
  totalCounter$: Observable<number>;


  constructor(private store: Store<StoreState>) {
    this.correctCounter$ = this.store.select((state) => state.score.correctCounter);
    this.incorrectCounter$ = this.store.select((state) => state.score.incorrectCounter);
    this.totalCounter$ = this.store.select((state) => state.score.totalCounter);
  }

  ngOnInit(): void {
  }

}
