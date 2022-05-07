import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeclensionComponent } from './first-declension.component';

describe('FirstDeclensionComponent', () => {
  let component: FirstDeclensionComponent;
  let fixture: ComponentFixture<FirstDeclensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDeclensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDeclensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
