import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaggTillIngridienserComponent } from './lagg-till-ingridienser.component';

describe('LaggTillIngridienserComponent', () => {
  let component: LaggTillIngridienserComponent;
  let fixture: ComponentFixture<LaggTillIngridienserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaggTillIngridienserComponent]
    });
    fixture = TestBed.createComponent(LaggTillIngridienserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
