import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxGrpComponent } from './checkbox-grp.component';

describe('CheckboxGrpComponent', () => {
  let component: CheckboxGrpComponent;
  let fixture: ComponentFixture<CheckboxGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
