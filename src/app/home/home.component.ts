import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  Character,
  IndexWord,
  Tone,
  TonePattern,
} from 'src/assets/models/types';
import { CorpusService, NucleusIndex } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import {
  determineTonePattern,
  getNuclei,
  removeWordAccents,
  getRandomWord as getRandomIndexWord,
  applyTonePatternToWord,
} from '../shared/utils';
import { setCorrectTonePattern, setSelectedIndexWord } from './actions/home.actions';

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
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
  correctCounter$: Observable<number>;
  totalCounter$: Observable<number>;
  selectedWork$: Observable<string>;
  selectedAuthor$: Observable<string>;
  selectedPassage$: Observable<string>;

  correctTonePattern: TonePattern | null = null;
  TonePattern = TonePattern;
  isAnswerCorrect: boolean | null = null;
  isGameOver = false;

  correct: IndexWord[] = [];

  constructor(
    private store: Store<StoreState>,
    private corpusService: CorpusService,
    private http: HttpClient
  ) {
    this.accentedText$ = this.store.select(state => state.data.accentedText);
    this.selectedIndexWord$ = this.store.select(state => state.data.selectedIndexWord);
    this.totalCounter$ = this.store.select(state => state.score.totalCounter);
    this.correctCounter$ = this.store.select(state => state.score.correctCounter);
    this.selectedAuthor$ = this.store.select(state => state.data.selectedAuthor);
    this.selectedWork$ = this.store.select(state => state.data.selectedWork);
    this.selectedPassage$ = this.store.select(state => state.data.selectedPassage);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.accentedText$.subscribe((text: string[]) => {
        let unaccentedText = text.map((word) =>
          removeWordAccents(word).replace(/[,.;:?????]/gi, '')
        );
        this.accentedText = Array.from(text.entries());
        this.displayText = Array.from(unaccentedText.entries());
        this.onSelectNewWord();
      }),

      this.selectedIndexWord$.subscribe((indexWordPair) => {
        if (!indexWordPair || !this.accentedText) return;
        this.selectedIndexWord = indexWordPair;
        this.correct.push(this.accentedText[indexWordPair[0]]);
        let currentIndex = this.selectedIndexWord[0];
        this.correctTonePattern = determineTonePattern(getNuclei(this.accentedText[currentIndex][1]));
        this.store.dispatch(setCorrectTonePattern({ tonePattern: this.correctTonePattern }));
        this.analyseWord(indexWordPair[0]);
      }),

      this.correctCounter$.subscribe((correctCounter) => {
        if (correctCounter === 0) return;
        if (this.accentedText && this.selectedIndexWord) {
          this.displayText?.splice(
            this.selectedIndexWord[0],
            1,
            this.accentedText[this.selectedIndexWord[0]]
          );
        }
      }),

      this.totalCounter$.subscribe((counter) => {
        if (counter === 0) return;
        setTimeout(() => {
          this.onSelectNewWord();
        }, 1500);
      })
    );
    this.corpusService.loadText();
  }

  onSelectNewWord(): void {
    if (!this.displayText) return;
    let unseenWords = this.displayText.filter(
      (word) => !this.correct.includes(word)
    );
    if (this.correct.length > 0 && unseenWords.length === 0) {
      this.isGameOver = true;
    } else {
      this.store.dispatch(
        setSelectedIndexWord({ indexWord: getRandomIndexWord(unseenWords) })
      );
    }
  }

  onClickWord(indexWord: IndexWord): void {
    if (!this.correct.includes(indexWord)) {
      this.store.dispatch(setSelectedIndexWord({ indexWord }));
      this.store.dispatch(setCorrectTonePattern({ tonePattern: determineTonePattern(
        getNuclei(indexWord[1]))}));
    }
  }

  analyseWord(index: number): any {
    // if (!this.accentedText) return null;
    // const selectedWord = this.accentedText[index][1];
    // console.log('Word:', selectedWord);
    // this.http.get<any>("http://localhost:1501/analysis/word?lang=grc&engine=morpheusgrc&word=" + selectedWord).subscribe(
    //   (data) => {
    //     const body = data.RDF.Annotation.Body;
    //     console.log('Perseus analysis:', body);
    //     if (body.length === undefined) {
    //       console.log('Type:', body.rest.entry.dict.pofs['$'])
    //       return;
    //     }
    //     console.log('Type:', body[0].rest.entry.dict.pofs['$'])
    //   }
    // )
  }
}
