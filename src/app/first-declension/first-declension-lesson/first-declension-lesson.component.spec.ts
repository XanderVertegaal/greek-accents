import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeclensionLessonComponent } from './first-declension-lesson.component';

describe('FirstDeclensionLessonComponent', () => {
  let component: FirstDeclensionLessonComponent;
  let fixture: ComponentFixture<FirstDeclensionLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDeclensionLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDeclensionLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
