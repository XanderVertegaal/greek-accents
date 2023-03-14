import { Component, Directive, Input, OnInit } from '@angular/core';
import { NominalForm, Casus, Numerus } from 'src/assets/types';

@Directive()
export abstract class TableComponent {
  @Input() sliceSize = 10;
  casus = Casus;
  numerus = Numerus;

  abstract words: NominalForm[];
  abstract declineSubstantive: (word: NominalForm, casus: Casus, numerus: Numerus) => string | void;

  constructor() { }


}
