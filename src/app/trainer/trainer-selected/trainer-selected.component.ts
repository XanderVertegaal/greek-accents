import { Component, Input } from '@angular/core';
import { GameState } from 'src/assets/types';

@Component({
  selector: 'app-trainer-selected',
  templateUrl: './trainer-selected.component.html',
  styleUrls: ['./trainer-selected.component.scss']
})
export class TrainerSelectedComponent {
  @Input() targetForm: string | null = null;
  @Input() gameState: GameState = 'waiting';

  constructor() { }

}
