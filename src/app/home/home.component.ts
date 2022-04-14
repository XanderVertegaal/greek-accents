import { Component, OnInit } from '@angular/core';
import { CorpusService} from '../services/corpus.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  constructor(private corpusService: CorpusService) { }

  ngOnInit(): void {
    this.corpusService.loadText();
   }

}
