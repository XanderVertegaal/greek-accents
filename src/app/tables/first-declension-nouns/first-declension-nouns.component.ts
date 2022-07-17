import { Component } from '@angular/core';
import { declineFirstDeclensionSubstantive } from 'src/app/shared/utils';
import { firstDeclensionSubstantives } from 'src/assets/exercises/first-decl-subst.data';
import { Casus, Numerus } from 'src/assets/types';

@Component({
  selector: 'app-first-declension-nouns',
  templateUrl: './first-declension-nouns.component.html',
  styleUrls: ['./first-declension-nouns.component.scss']
})
export class FirstDeclensionNounsComponent {
  declineSubstantive = declineFirstDeclensionSubstantive;
  casus = Casus;
  numerus = Numerus;
  words = firstDeclensionSubstantives;
}
