import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverywomanComponent } from './foreverywoman.component';

describe('ForeverywomanComponent', () => {
  let component: ForeverywomanComponent;
  let fixture: ComponentFixture<ForeverywomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeverywomanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeverywomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
