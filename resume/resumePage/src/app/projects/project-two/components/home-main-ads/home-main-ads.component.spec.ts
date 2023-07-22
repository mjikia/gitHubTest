import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainAdsComponent } from './home-main-ads.component';

describe('HomeMainAdsComponent', () => {
  let component: HomeMainAdsComponent;
  let fixture: ComponentFixture<HomeMainAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
