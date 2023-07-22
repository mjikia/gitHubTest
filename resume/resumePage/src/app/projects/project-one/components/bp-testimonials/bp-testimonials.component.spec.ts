import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpTestimonialsComponent } from './bp-testimonials.component';

describe('BpTestimonialsComponent', () => {
  let component: BpTestimonialsComponent;
  let fixture: ComponentFixture<BpTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
