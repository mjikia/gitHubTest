import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLandingFourComponent } from './bp-landing-four.component';

describe('BpLandingFourComponent', () => {
  let component: BpLandingFourComponent;
  let fixture: ComponentFixture<BpLandingFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLandingFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLandingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
