import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CorpusService } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import { setSelectedText } from './actions/text-list.actions';
import { Text } from 'src/assets/types';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss']
})
export class TextListComponent implements OnInit {
  texts: Text[] = [];

  constructor(private corpusService: CorpusService, private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.texts = this.corpusService.corpus;
  }

  selectText(textId: string): void {
    const selectedText = this.texts.find(text => text.id === textId);
    if (selectedText !== undefined)
    {
      this.store.dispatch(setSelectedText({ text: selectedText}));
      }
  }

}
