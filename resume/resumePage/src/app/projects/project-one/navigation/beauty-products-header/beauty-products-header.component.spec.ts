import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductsHeaderComponent } from './beauty-products-header.component';

describe('BeautyProductsHeaderComponent', () => {
  let component: BeautyProductsHeaderComponent;
  let fixture: ComponentFixture<BeautyProductsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyProductsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
