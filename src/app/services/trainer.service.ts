import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IndexWord, Text } from 'src/assets/types';
import { getRandomItem } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  selectedText$ = new BehaviorSubject<Text | null>(null);
  selectedIndexWord$ = new BehaviorSubject<IndexWord | null>(null);

  constructor() { }

  selectNewIndexWord(unseenWords: IndexWord[]): void {
    this.selectedIndexWord$.next(getRandomItem(unseenWords));
  }

  selectRandomNewText(texts: Text[]): void {
    this.selectedText$.next(getRandomItem(texts));
  }

  selectNewText(text: Text): void {
    this.selectedText$.next(text);
  }
}
