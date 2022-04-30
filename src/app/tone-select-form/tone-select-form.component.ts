import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { IndexWord, TonePattern } from 'src/assets/types';
import { StoreState } from '../shared/state';
import { applyTonePatternToWord } from '../shared/utils';

@Component({
  selector: 'app-tone-select-form',
  templateUrl: './tone-select-form.component.html',
  styleUrls: ['./tone-select-form.component.scss'],
})
export class ToneSelectFormComponent implements OnInit, OnDestroy {
  @Input() selectedWord: string = '';
  @Output() selectNewWord = new EventEmitter<void>();
  @Output() selectTone = new EventEmitter<TonePattern>();
  subscriptions: Subscription[] = [];
  TonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  
  applyTonePatternToWord = applyTonePatternToWord;

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(
      fromEvent(window, 'keydown').subscribe((event: Event) => {
        this.handleKeyDown(event as KeyboardEvent);
      })
    );
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.selectTone.emit(TonePattern.TONELESS);
        break;
      case '1':
        this.selectTone.emit(TonePattern.OXYTONE_ACUTE);
        break;
      case '2':
        this.selectTone.emit(TonePattern.PAROXYTONE);
        break;
      case '3':
        this.selectTone.emit(TonePattern.PROPAROXYTONE);
        break;
      case '4':
        this.selectTone.emit(TonePattern.PERISPOMENON);
        break;
      case '5':
        this.selectTone.emit(TonePattern.PROPERISPOMENON);
        break;
      case '6':
        this.selectTone.emit(TonePattern.PROPAROXYTONE_AND_OXYTONE);
        break;
      case '7':
        this.selectTone.emit(TonePattern.PROPERISPOMENON_AND_OXYTONE);
        break;
      case '8':
        this.selectTone.emit(TonePattern.OXYTONE_GRAVE);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
