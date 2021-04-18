import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrzItemCardComponent } from './hrz-item-card.component';

describe('HrzItemCardComponent', () => {
  let component: HrzItemCardComponent;
  let fixture: ComponentFixture<HrzItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrzItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrzItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
