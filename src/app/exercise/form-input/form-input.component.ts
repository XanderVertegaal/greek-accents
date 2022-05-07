import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { alphabetMap } from 'src/app/shared/alphabetMap';
import { StoreState } from 'src/app/shared/state';
import { getCharFromLetter, getCharFromProps } from 'src/app/shared/utils';
import { Aspiration, Character, Tone } from 'src/assets/types';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Output() answerIsCorrect = new EventEmitter<boolean>();
  isAnswerCorrect: boolean | undefined;

  selectedWord: string | undefined = undefined;
  input = new FormControl();

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.select(state => state.exercise.answerStatus).subscribe(status => this.isAnswerCorrect = status);
  }


  onSubmit(event: Event): void {
    event.preventDefault();
    
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
        newCharProps.props.aspirated =
          newCharProps.props.aspirated === Aspiration.ASPER ? Aspiration.NONE : Aspiration.ASPER;
        break;
      case ')':
        newCharProps.props.aspirated = 
          newCharProps.props.aspirated === Aspiration.LENIS ? Aspiration.NONE : Aspiration.LENIS;
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
