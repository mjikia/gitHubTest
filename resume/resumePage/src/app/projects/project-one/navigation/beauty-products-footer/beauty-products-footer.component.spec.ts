import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyProductsFooterComponent } from './beauty-products-footer.component';

describe('BeautyProductsFooterComponent', () => {
  let component: BeautyProductsFooterComponent;
  let fixture: ComponentFixture<BeautyProductsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautyProductsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyProductsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
