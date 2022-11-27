import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeclensionExerciseComponent } from './first-declension-exercise.component';

describe('FirstDeclensionExerciseComponent', () => {
  let component: FirstDeclensionExerciseComponent;
  let fixture: ComponentFixture<FirstDeclensionExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDeclensionExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstDeclensionExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
