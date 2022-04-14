import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IndexWord, Text, TonePattern } from 'src/assets/types';
import { setCorrectTonePattern, setSelectedIndexWord } from './actions/trainer.actions';
import { CorpusService } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import { applyTonePatternToWord, determineTonePattern, getNuclei, getRandomWord, removeWordAccents } from '../shared/utils';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  applyTonePatternToWord = applyTonePatternToWord;

  subscriptions: Subscription[] = [];

  accentedText: IndexWord[] | null = null;
  displayText: IndexWord[] | null = null;
  selectedAuthor: string = '';
  selectedWork: string = '';
  selectedPassage: string = '';

  selectedIndexWord$: Observable<IndexWord | null>;
  selectedIndexWord: IndexWord | null = null;
  correctCounter$: Observable<number>;
  totalCounter$: Observable<number>;
  selectedText$: Observable<Text | null>;

  correctTonePattern: TonePattern | null = null;
  TonePattern = TonePattern;
  isAnswerCorrect: boolean | null = null;
  isGameOver = false;

  correct: IndexWord[] = [];

  constructor(
    private store: Store<StoreState>,
  ) {
    this.selectedIndexWord$ = this.store.select(state => state.data.selectedIndexWord);
    this.totalCounter$ = this.store.select(state => state.score.totalCounter);
    this.correctCounter$ = this.store.select(state => state.score.correctCounter);
    this.selectedText$ = this.store.select(state => state.data.selectedText);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.selectedText$.subscribe((text: Text | null) => { 
        if (text === null) return;
        const splitText = text.text.split(' ');
        let unaccentedText = splitText.map((word) =>
          removeWordAccents(word).replace(/[,.;:—·]/gi, '')
        );
        this.accentedText = Array.from(splitText.entries());
        this.displayText = Array.from(unaccentedText.entries());
        this.selectedAuthor = text.author;
        this.selectedWork = text.work;
        this.selectedPassage = text.passage;
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
          this.selectedIndexWord = this.accentedText[this.selectedIndexWord[0]];
        }
      }),

      this.totalCounter$.subscribe((counter) => {
        if (counter === 0) return;
        setTimeout(() => {
          this.onSelectNewWord();
        }, 1500);
      })
    );
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
        setSelectedIndexWord({ indexWord: getRandomWord(unseenWords) })
      );
    }
  }

  onClickWord(indexWord: IndexWord): void {
    if (!this.correct.includes(indexWord)) {
      this.store.dispatch(setSelectedIndexWord({ indexWord }));
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
