import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterState } from 'src/assets/types';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit, OnDestroy {
  @Input() numberOfAssignments = 0;
  counters: CounterState | null = null;
  private subscriptions: Subscription[] = [];

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.counterService.watchCounters$().subscribe(counters => this.counters = counters)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
