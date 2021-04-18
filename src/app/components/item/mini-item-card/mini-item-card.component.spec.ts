import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniItemCardComponent } from './mini-item-card.component';

describe('MiniItemCardComponent', () => {
  let component: MiniItemCardComponent;
  let fixture: ComponentFixture<MiniItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
