import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { alphabetMap } from 'src/app/shared/alphabetMap';
import { slideInTrigger } from 'src/app/shared/animations';
import { StoreState } from 'src/app/shared/state';
import { applyTonePatternToWord, getCharFromLetter, getCharFromProps } from 'src/app/shared/utils';
import { Aspiration, Character, Tone } from 'src/assets/types';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  animations: [ slideInTrigger ]
})
export class FormInputComponent implements OnInit {
  @Output() answerIsCorrect = new EventEmitter<boolean>();

  showInfo = false;
  targetForm: string | undefined = undefined;
  input = new FormControl();

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.select(storeState => storeState.exercise.selectedForm).subscribe(selected => {
      if (selected === undefined) {
        return;
      }
      this.targetForm = applyTonePatternToWord(selected.form, selected.tone) ?? '';
    });
  }

  onClearInput(): void {
    this.input.setValue('');
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.targetForm) {
      return;
    }
    if (this.input.value === this.targetForm) {
      this.answerIsCorrect.emit(true);
    } else {
      this.answerIsCorrect.emit(false);
    }
    this.onClearInput();
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
      this.input.setValue(newValue.join(''));
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
        this.input.setValue(newValue.join(''));
        return;
    }

    newChar = getCharFromProps(newCharProps);
    if (newChar) {
      newValue.splice(caretPosition - 2, 2, newChar.glyph);
    }
    this.input.setValue(newValue.join(''));
  }

}
