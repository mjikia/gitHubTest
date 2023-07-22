import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLandingThreeComponent } from './bp-landing-three.component';

describe('BpLandingThreeComponent', () => {
  let component: BpLandingThreeComponent;
  let fixture: ComponentFixture<BpLandingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLandingThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLandingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
