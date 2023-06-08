import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '../data.service';
import { DiscountCalculationPipe } from '../shared/pipes/discount-calculation.pipe';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, DiscountCalculationPipe],
      providers: [DataService, DiscountCalculationPipe],

    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
