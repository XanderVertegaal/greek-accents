import { Pipe, PipeTransform } from '@angular/core';
import { removeWordAccents } from './utils';

@Pipe({
  name: 'removeAccent'
})
export class RemoveAccentPipe implements PipeTransform {

  transform(word: string): string {
    return removeWordAccents(word);
  }

}
