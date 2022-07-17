import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneSelectFormComponent } from './tone-select-form.component';

describe('ToneSelectFormComponent', () => {
  let component: ToneSelectFormComponent;
  let fixture: ComponentFixture<ToneSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToneSelectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
