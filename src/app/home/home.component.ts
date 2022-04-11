import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  Character,
  IndexWord,
  Tone,
  TonePattern,
} from 'src/assets/models/types';
import { CorpusService, NucleusIndex } from '../services/corpus.service';
import { StoreState } from '../shared/state';
import {
  determineTonePattern,
  getNuclei,
  removeWordAccents,
  getRandomWord as getRandomIndexWord,
  applyTonePatternToWord,
} from '../shared/utils';
import { setCorrectTonePattern, setSelectedIndexWord } from '../trainer/actions/trainer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void { }

}
