import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, Observable } from 'rxjs';
import { allChars, allSemi, toneChars, tonelessChars } from 'src/assets/models';
import { iota, iotaToneless } from 'src/assets/models/iota';
import {
  Aspiration,
  Character,
  Tone,
  TonePattern,
} from 'src/assets/models/types';
import { upsilon, upsilonToneless } from 'src/assets/models/upsilon';
import { areCharPropsEqual, randomInt, removeWordAccents } from '../shared/utils';
import {
  setAccentedText,
} from './actions/corpus.actions';

export interface Text {
  author: string;
  work: string;
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
      const selectedText = corpus[randomInt(0, corpus.length - 1)].text.split(' ');
      this.store.dispatch(setAccentedText({ text: selectedText }));

      // this.http.get('http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0012.tlg001:1.1')
      //   .pipe(
      //     catchError(error => this.errorHandler.handleError(error))
      //   )
      //   .subscribe(console.log);
    });
  }
}
