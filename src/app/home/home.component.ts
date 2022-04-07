import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Character, IndexWord, Tone, TonePattern } from 'src/assets/models/types';
import { CorpusService, NucleusIndex } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import { determineTonePattern, getNuclei, removeWordAccents, getRandomWord as getRandomIndexWord, applyTonePatternToWord } from '../shared/utils';
import { setSelectedIndexWord } from './actions/home.actions';

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  applyTonePatternToWord = applyTonePatternToWord;
  
  subscriptions: Subscription[] = [];

  accentedText: IndexWord[] | null = null;
  displayText: IndexWord[] | null = null;

  accentedText$: Observable<string[]>;
  selectedIndexWord$: Observable<IndexWord | null>;
  selectedIndexWord: IndexWord | null = null;
  trimmedWord: string = '';
  
  tonePattern: TonePattern | null = null;
  TonePattern = TonePattern;
  isAnswerCorrect: boolean | null = null;
  isGameOver = false;

  //Move to score component(?)
  correctCounter: number = 0;
  incorrectCounter: number = 0;
  totalCounter: number = 0;

  seen: IndexWord[] = [];

  constructor(
    private store: Store<StoreState>,
    private corpusService: CorpusService
  ) {
    this.accentedText$ = this.store.select((state) => state.data.accentedText);
    this.selectedIndexWord$ = this.store.select((state) => state.data.selectedIndexWord);
  }

  ngOnInit(): void {
    this.corpusService.loadText();

    this.subscriptions.push(
      this.accentedText$.subscribe((text: string[]) => {
        let unaccentedText = text.map(word => removeWordAccents(word).replace(/[,.;:—·]/gi, ''));
        this.accentedText = Array.from(text.entries());
        this.displayText = Array.from(unaccentedText.entries());
        this.onSelectNewWord();
      }),

      this.selectedIndexWord$.subscribe((indexWordPair) => {
        if (!indexWordPair || !this.accentedText) return;
        this.selectedIndexWord = indexWordPair;
        this.trimmedWord = this.selectedIndexWord[1].replace(/[,.;:—·]/gi, '');
        this.seen.push(this.accentedText[indexWordPair[0]]);
        let currentIndex = this.selectedIndexWord[0];
        this.tonePattern = determineTonePattern(getNuclei(this.accentedText[currentIndex][1]));
      })
    );
  }

  onSelectNewWord(): void {
    if (!this.displayText) return;
    let unseenWords = this.displayText.filter(word => !this.seen.includes(word));
    if (this.seen.length > 0 && unseenWords.length === 0) {
      this.isGameOver = true;
    } else {
      this.store.dispatch(setSelectedIndexWord({ indexWord: getRandomIndexWord(unseenWords) }));
    }
  }

  onSelectTone(tonePattern: TonePattern): void {
    if (tonePattern === this.tonePattern) {
      this.isAnswerCorrect = true;
      this.correctCounter++;
      if (this.accentedText && this.selectedIndexWord) {
        this.displayText?.splice(this.selectedIndexWord[0], 1, this.accentedText[this.selectedIndexWord[0]]);
        this.selectedIndexWord = this.accentedText[this.selectedIndexWord[0]];
      }
    } else {
      this.isAnswerCorrect = false;
      this.incorrectCounter++;
    }
    this.totalCounter++;
    setTimeout(() => {
      this.isAnswerCorrect = null;
      this.onSelectNewWord();
    }, 1000);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.onSelectTone(TonePattern.TONELESS);
        break;
      case '1':
        this.onSelectTone(TonePattern.OXYTONE);
        break;
      case '2':
        this.onSelectTone(TonePattern.PAROXYTONE);
        break;
      case '3':
        this.onSelectTone(TonePattern.PROPAROXYTONE);
        break;
      case '4':
        this.onSelectTone(TonePattern.PERISPOMENON);
        break;
      case '5':
        this.onSelectTone(TonePattern.PROPERISPOMENON);
        break;
      case '6':
        this.onSelectTone(TonePattern.PROPAROXYTONE_AND_OXYTONE);
        break;
      case '7':
        this.onSelectTone(TonePattern.PROPERISPOMENON_AND_OXYTONE);
        break;
      case '8':
        this.onSelectTone(TonePattern.BARYTONE);
    }
  }
}
function setSelectedWord(arg0: { word: string; }): any {
  throw new Error('Function not implemented.');
}

