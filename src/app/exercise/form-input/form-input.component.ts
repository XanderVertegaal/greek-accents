import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, map, Subject, Subscription, throttleTime } from 'rxjs';
import { alphabetMap } from 'src/app/shared/alphabetMap';
import { slideInTrigger } from 'src/app/shared/animations';
import { getCharFromLetter, getCharFromProps } from 'src/app/shared/utils';
import { Aspiration, Character, Tone, WordClass } from 'src/assets/types';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  animations: [ slideInTrigger ]
})
export class FormInputComponent implements OnInit, OnDestroy {
  @Input() targetForm: string | null = null;
  @Output() answerIsCorrect = new EventEmitter<boolean>();
  showInfo = false;
  form = new FormGroup({
    input: new FormControl<string|null>(null)
  });
  submitAnswer = new Subject<void>();
  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.submitAnswer.pipe(
        map(() => this.form.controls.input.value),
        filter(inputValue => this.targetForm !== null && inputValue !== null),
        throttleTime(1000)
      ).subscribe(inputValue => {
        if (inputValue === this.targetForm) {
          this.answerIsCorrect.emit(true);
        } else {
          this.answerIsCorrect.emit(false);
        }
        this.clearInput();
      })
    );
  }

  clearInput(): void {
    this.form.reset();
  }

  onInput(event: Event): void {
    const target = (event.target as HTMLInputElement);
    const newValue = target.value
      .split('')
      .map(char => alphabetMap[char] ?? char);

    const caretPosition = target.selectionStart ?? 0;
    const newlyAdded: string | undefined = newValue[caretPosition - 1];
    const prevChar: Character | undefined = getCharFromLetter(newValue[caretPosition - 2]);

    if (!newlyAdded || !prevChar) {
      this.form.controls['input'].setValue(newValue.join(''));
      return;
    }

    let newChar: Character | null = null;
    const newCharProps = {
      ...prevChar,
      props: {
        ...prevChar.props
      }
    };
    switch (newlyAdded) {
      case '/':
        newCharProps.props.tone =
          newCharProps.props.tone === Tone.ACUTE ? Tone.NONE : Tone.ACUTE;
        break;
      case '\\':
        newCharProps.props.tone =
          newCharProps.props.tone === Tone.GRAVE ? Tone.NONE : Tone.GRAVE;
        break;
      case '=':
        newCharProps.props.tone =
          newCharProps.props.tone === Tone.CIRCUMFLEX ? Tone.NONE : Tone.CIRCUMFLEX;
        break;
      case '(':
        newCharProps.props.aspiration =
          newCharProps.props.aspiration === Aspiration.ASPER ? Aspiration.NONE : Aspiration.ASPER;
        break;
      case ')':
        newCharProps.props.aspiration =
          newCharProps.props.aspiration === Aspiration.LENIS ? Aspiration.NONE : Aspiration.LENIS;
        break;
      case ',':
        newCharProps.props.subscripted = !newCharProps.props.subscripted;
        break;
      default:
        this.form.controls['input'].setValue(newValue.join(''));
        return;
    }

    newChar = getCharFromProps(newCharProps);
    if (newChar) {
      newValue.splice(caretPosition - 2, 2, newChar.glyph);
    }
    this.form.controls['input'].setValue(newValue.join(''));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
