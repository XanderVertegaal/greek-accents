import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { filter, fromEvent, map, Subject, Subscription, throttleTime } from 'rxjs';
import { Answer, TonePattern } from 'src/assets/types';
import { applyTonePatternToWord, determineTonePattern, getNuclei, removeWordAccents } from '../../shared/utils';

@Component({
  selector: 'app-tone-select-form',
  templateUrl: './tone-select-form.component.html',
  styleUrls: ['./tone-select-form.component.scss'],
})
export class ToneSelectFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() targetForm: string | null = null;
  @Output() answerIsCorrect = new EventEmitter<Answer>();
  targetTonePattern: TonePattern | null = null;
  tonePattern = TonePattern;
  tonePatterns: TonePattern[] = Object.values(TonePattern);
  selectedTone$ = new Subject<TonePattern>();

  applyTonePatternToWord = applyTonePatternToWord;
  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(
      fromEvent(window, 'keydown').pipe(
      ).subscribe(event => {
        this.handleKeyDown(event as KeyboardEvent);
      }),

      this.selectedTone$.pipe(
        throttleTime(1000)
      ).subscribe(tonePattern => {
        const targetForm = this.targetForm;
        if (tonePattern === null || targetForm === null) {
          return; // Should not occur, see filter above.
        }
        const correctTone = this.targetTonePattern;
        const enteredForm = applyTonePatternToWord(removeWordAccents(targetForm), tonePattern);
        if (enteredForm === null) {
          return;
        }
        if (tonePattern === correctTone) {
          this.answerIsCorrect.emit({
            enteredForm,
            isCorrect: true
          });
        } else {
          this.answerIsCorrect.emit({
            enteredForm,
            isCorrect: false
          });
        }
      })
    );

    if (this.targetForm) {
      this.targetTonePattern = determineTonePattern(getNuclei(this.targetForm));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['targetForm']) {
      this.targetTonePattern = determineTonePattern(getNuclei(changes['targetForm'].currentValue));
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case '0':
        this.selectedTone$.next(TonePattern.TONELESS);
        break;
      case '1':
        this.selectedTone$.next(TonePattern.OXYTONE_ACUTE);
        break;
      case '2':
        this.selectedTone$.next(TonePattern.PAROXYTONE);
        break;
      case '3':
        this.selectedTone$.next(TonePattern.PROPAROXYTONE);
        break;
      case '4':
        this.selectedTone$.next(TonePattern.PERISPOMENON);
        break;
      case '5':
        this.selectedTone$.next(TonePattern.PROPERISPOMENON);
        break;
      case '6':
        this.selectedTone$.next(TonePattern.PROPAROXYTONE_AND_OXYTONE);
        break;
      case '7':
        this.selectedTone$.next(TonePattern.PROPERISPOMENON_AND_OXYTONE);
        break;
      case '8':
        this.selectedTone$.next(TonePattern.OXYTONE_GRAVE);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
