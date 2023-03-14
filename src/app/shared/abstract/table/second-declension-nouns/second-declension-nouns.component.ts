import { Component, OnInit } from '@angular/core';
import { declineSecondDeclensionSubstantive } from 'src/app/shared/utils';
import { secondDeclensionSubstantives } from 'src/assets/exercises/sec-decl-subst.data';
import { TableComponent } from '../table.component';

@Component({
  selector: 'app-second-declension-nouns',
  templateUrl: '../table.component.html',
  styleUrls: ['../table.component.scss']
})
export class SecondDeclensionNounsComponent extends TableComponent implements OnInit {
  words = secondDeclensionSubstantives;
  declineSubstantive = declineSecondDeclensionSubstantive;

  ngOnInit(): void {
    // this.words = this.words.slice(0, this.sliceSize);
  }
}
