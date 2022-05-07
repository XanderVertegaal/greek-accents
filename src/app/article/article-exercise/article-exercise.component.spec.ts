import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExerciseComponent } from './article-exercise.component';

describe('ArticleExerciseComponent', () => {
  let component: ArticleExerciseComponent;
  let fixture: ComponentFixture<ArticleExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
