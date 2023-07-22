import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLandingComponent } from './bp-landing.component';

describe('BpLandingComponent', () => {
  let component: BpLandingComponent;
  let fixture: ComponentFixture<BpLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
