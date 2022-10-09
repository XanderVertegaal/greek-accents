import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { skip, Subscription } from 'rxjs';
import { GameState, TonePattern } from 'src/assets/types';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  @Input() isGameOver = false;
  @Input() correctTonePattern: TonePattern | null = null;
  @Input() gameState: GameState = 'waiting';

  private subscriptions: Subscription[] = [];

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.counterService.watchCounter$('correct').pipe(
        skip(1)
      ).subscribe(() => {
        this.gameState = 'correct';
      }),

      this.counterService.watchCounter$('incorrect').pipe(
        skip(1)
      ).subscribe(() => {
        this.gameState = 'incorrect';
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
