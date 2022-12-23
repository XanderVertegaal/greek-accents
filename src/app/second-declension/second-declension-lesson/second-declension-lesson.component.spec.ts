import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDeclensionLessonComponent } from './second-declension-lesson.component';

describe('SecondDeclensionLessonComponent', () => {
  let component: SecondDeclensionLessonComponent;
  let fixture: ComponentFixture<SecondDeclensionLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDeclensionLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDeclensionLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
