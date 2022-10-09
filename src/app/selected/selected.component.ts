import { Component, Input } from '@angular/core';
import { GameState, Casus, Genus, Numerus } from 'src/assets/types';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {
  @Input() hints: [Casus, Numerus, Genus] | null = null;
  @Input() targetForm: string | null = null;
  @Input() gameState: GameState = 'waiting';
  showHints = true;

  constructor( ) { }

}
