import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDeclensionNounsComponent } from './first-declension-nouns.component';

describe('FirstDeclensionNounsComponent', () => {
  let component: FirstDeclensionNounsComponent;
  let fixture: ComponentFixture<FirstDeclensionNounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDeclensionNounsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDeclensionNounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
