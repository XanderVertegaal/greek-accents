import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { Text } from 'src/assets/types';
import { randomInt } from '../shared/utils';
import { setSelectedText } from './actions/corpus.actions';

@Injectable({
  providedIn: 'root',
})
export class CorpusService {
  texts = new BehaviorSubject<Text[]>([]);

  constructor(
    private store: Store,
    private http: HttpClient,
    private errorHandler: ErrorHandler
  ) {}

  loadText(): void {
    this.http
      .get<Text[]>('assets/mockData.json')
      .subscribe((corpus: Text[]) => {
        const selectedText = corpus[randomInt(0, corpus.length - 1)];
        this.store.dispatch(setSelectedText({ text: selectedText }));
        this.texts.next(corpus);

        // this.http.get('http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0012.tlg001:1.1')
        //   .pipe(
        //     catchError(error => this.errorHandler.handleError(error))
        //   )
        //   .subscribe(console.log);
      });
  }
}
