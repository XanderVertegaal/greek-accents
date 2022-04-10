import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { areCharPropsEqual, randomInt, removeWordAccents } from '../shared/utils';
import {
  setAccentedText, setSelectedAuthor, setSelectedPassage, setSelectedWork,
} from './actions/corpus.actions';

export interface Text {
  author: string;
  work: string;
  passage: string;
  text: string;
}
export interface NucleusIndex {
  nucleus: string;
  index: number;
}

@Injectable({
  providedIn: 'root',
})
export class CorpusService {

  constructor(private store: Store, private http: HttpClient, private errorHandler: ErrorHandler) { }
  
  loadText(): void {
    this.http.get<Text[]>('assets/mockData.json').subscribe((corpus: Text[]) => {
      const {author, work, passage, text} = corpus[randomInt(0, corpus.length - 1)];
      this.store.dispatch(setAccentedText({ text: text.split(' ') }));
      this.store.dispatch(setSelectedAuthor({ author }));
      this.store.dispatch(setSelectedPassage({ passage }));
      this.store.dispatch(setSelectedWork({ work }));

      // this.http.get('http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0012.tlg001:1.1')
      //   .pipe(
      //     catchError(error => this.errorHandler.handleError(error))
      //   )
      //   .subscribe(console.log);
    });
  }
}
