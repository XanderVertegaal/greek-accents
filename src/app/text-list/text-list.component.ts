import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CorpusService } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import { setSelectedText } from './actions/text-list.actions';
import { Text } from 'src/assets/types';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
})
export class TextListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  selectedText$: Observable<Text | null>;
  selectedId = '';
  texts: Text[] = [];

  constructor(
    private corpusService: CorpusService,
    private store: Store<StoreState>
  ) {
    this.selectedText$ = this.store.select((state) => state.trainer.selectedText);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.selectedText$.subscribe((text) => {
        this.selectedId = text ? text.id : '';
      }),
      this.corpusService.texts.subscribe((texts) => {
        this.texts = texts;
      })
    );
  }

  selectText(textId: string): void {
    const selectedText = this.texts.find((text) => text.id === textId);
    if (selectedText !== undefined) {
      this.store.dispatch(setSelectedText({ text: selectedText }));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
