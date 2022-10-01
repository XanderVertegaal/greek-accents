import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(word: string): string {
    return word.replace(/[,.;:—·]/gi, '');
  }

}
