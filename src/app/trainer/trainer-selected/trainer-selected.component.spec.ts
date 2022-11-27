import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSelectedComponent } from './trainer-selected.component';

describe('TrainerSelectedComponent', () => {
  let component: TrainerSelectedComponent;
  let fixture: ComponentFixture<TrainerSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
