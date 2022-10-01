import { Component, OnDestroy, OnInit } from '@angular/core';
import { CorpusService } from '../services/corpus.service';
import { Text } from 'src/assets/types';
import { Subscription } from 'rxjs';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss'],
})
export class TextListComponent implements OnInit, OnDestroy {
  selectedText: Text | null = null;
  texts: Text[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private corpusService: CorpusService,
    private trainerService: TrainerService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.trainerService.selectedText$.subscribe(text => this.selectedText = text),

      this.corpusService.texts$.subscribe(texts => this.texts = texts)
    );
  }

  selectText(text: Text): void {
    this.trainerService.selectNewText(text);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
