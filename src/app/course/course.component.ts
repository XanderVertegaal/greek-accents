import { Component, OnInit } from '@angular/core';
import { NominalForm } from 'src/assets/types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  selectedWord: NominalForm | null = null;

  constructor() { }

  ngOnInit(): void { }

}
