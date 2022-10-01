import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Text } from 'src/assets/types';
import { randomInt } from '../shared/utils';

@Injectable({
  providedIn: 'root',
})
export class CorpusService {
  texts$ = new BehaviorSubject<Text[]>([]);
  selectedText: Text | null = null;

  constructor(
    private http: HttpClient
  ) {}

  loadTexts(): void {
    this.http
      .get<Text[]>('assets/mockData.json')
      .subscribe((corpus: Text[]) => {
        this.selectedText = corpus[randomInt(0, corpus.length - 1)];
        this.texts$.next(corpus);

        // this.http.get('http://www.perseus.tufts.edu/hopper/CTS?request=GetPassage&urn=urn:cts:greekLit:tlg0012.tlg001:1.1')
        //   .pipe(
        //     catchError(error => this.errorHandler.handleError(error))
        //   )
        //   .subscribe(console.log);
      });
  }
}
