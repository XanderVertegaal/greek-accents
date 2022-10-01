import { Pipe, PipeTransform } from '@angular/core';
import { TonePattern } from 'src/assets/types';
import { applyTonePatternToWord } from './utils';

@Pipe({
  name: 'addAccent'
})
export class AddAccentPipe implements PipeTransform {

  transform(word: string, tonePattern: TonePattern): string | null {
    return applyTonePatternToWord(word, tonePattern);
  }

}
