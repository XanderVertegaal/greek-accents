import { Injectable } from '@angular/core';
import { Assignment, WordClass } from 'src/assets/types';

export interface Mistake {
  assignment: Assignment<WordClass>;
  incorrectInput: string;
}

@Injectable({
  providedIn: 'root'
})
export class MistakeService {
  mistakes: Mistake[] = [];

  constructor() { }
}
