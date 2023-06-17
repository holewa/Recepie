import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaggTillRecepetComponent } from './lagg-till-recepet.component';

describe('LaggTillRecepetComponent', () => {
  let component: LaggTillRecepetComponent;
  let fixture: ComponentFixture<LaggTillRecepetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaggTillRecepetComponent]
    });
    fixture = TestBed.createComponent(LaggTillRecepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
