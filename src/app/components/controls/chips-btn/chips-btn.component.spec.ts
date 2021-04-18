import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBtnComponent } from './chips-btn.component';

describe('ChipsBtnComponent', () => {
  let component: ChipsBtnComponent;
  let fixture: ComponentFixture<ChipsBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
