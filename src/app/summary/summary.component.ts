import { Component, OnInit } from '@angular/core';
import { Casus, Diathesis, Genus, Numerus, Question, TonePattern } from 'src/assets/types';
import { Mistake, MistakeService } from '../services/mistake.service';
import { mockMistakes } from './mistakesTemp';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  allMistakes: Mistake[] = [];
  lexemeMistakes: Mistake[] = [];
  toneMistakes: Mistake[] = [];

  constructor(private mistakeService: MistakeService) { }

  ngOnInit(): void {
    // this.mistakes = this.mistakeService.mistakes;
    this.allMistakes = mockMistakes;
    console.log('Mistakes were made:', this.mistakeService.mistakes);

    this.analyseMistakes(this.allMistakes);
  }

  private analyseMistakes(mistakes: Mistake[]): void {
    return;
  }

}
