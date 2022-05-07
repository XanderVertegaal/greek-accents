import { Component, Input, OnInit } from '@angular/core';
import { Article, Casus, Genus, Numerus } from 'src/assets/types';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  @Input() selectedWord: string | null = null;
  @Input() hints: [Casus, Numerus, Genus] | null = null;
  @Input() showHints = true;


  constructor() { }

  ngOnInit(): void {
  }

}
