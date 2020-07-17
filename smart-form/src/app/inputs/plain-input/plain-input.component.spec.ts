import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainInputComponent } from './plain-input.component';

describe('TextInputComponent', () => {
  let component: PlainInputComponent;
  let fixture: ComponentFixture<PlainInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlainInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
