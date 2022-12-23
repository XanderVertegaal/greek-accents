import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDeclensionExerciseComponent } from './second-declension-exercise.component';

describe('SecondDeclensionExerciseComponent', () => {
  let component: SecondDeclensionExerciseComponent;
  let fixture: ComponentFixture<SecondDeclensionExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondDeclensionExerciseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondDeclensionExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
