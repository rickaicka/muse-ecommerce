import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityBtnComponent } from './quantity-btn.component';

describe('QuantityBtnComponent', () => {
  let component: QuantityBtnComponent;
  let fixture: ComponentFixture<QuantityBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
