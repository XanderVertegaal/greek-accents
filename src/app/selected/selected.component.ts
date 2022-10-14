import { Component, Input } from '@angular/core';
import { GameState, Hint } from 'src/assets/types';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {
  @Input() hints: Hint[] | null = null;
  @Input() targetForm: string | null = null;
  @Input() gameState: GameState = 'waiting';
  @Input() showHints = true;

  constructor() { }

}
