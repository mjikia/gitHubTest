import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLandingTwoComponent } from './bp-landing-two.component';

describe('BpLandingTwoComponent', () => {
  let component: BpLandingTwoComponent;
  let fixture: ComponentFixture<BpLandingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLandingTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLandingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
