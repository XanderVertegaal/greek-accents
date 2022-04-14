import { Component, OnInit } from '@angular/core';
import { CorpusService, Text } from '../services/corpus.service';
import { StoreState } from '../shared/state';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss']
})
export class TextListComponent implements OnInit {
  texts: Text[] = [];

  constructor(private corpusService: CorpusService) { }

  ngOnInit(): void {
    this.texts = this.corpusService.corpus;
  }

  selectText(textId: string): void {
    console.log('Implementing seelected text');
  }

}
