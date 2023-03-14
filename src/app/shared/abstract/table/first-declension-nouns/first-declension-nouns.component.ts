import { Component, OnInit } from '@angular/core';
import { declineFirstDeclensionSubstantive } from 'src/app/shared/utils';
import { firstDeclensionSubstantives } from 'src/assets/exercises/first-decl-subst.data';
import { NominalForm } from 'src/assets/types';
import { TableComponent } from '../table.component';

@Component({
  selector: 'app-first-declension-nouns',
  templateUrl: '../table.component.html',
  styleUrls: ['../table.component.scss']
})
export class FirstDeclensionNounsComponent extends TableComponent implements OnInit {
  words: NominalForm[] = firstDeclensionSubstantives;
  declineSubstantive = declineFirstDeclensionSubstantive;

  ngOnInit(): void {
    this.words = this.words.slice(0, this.sliceSize);
  }
}
