import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { DataService, ShoppingCart } from '../data.service';
import { DiscountCalculationPipe } from '../shared/pipes/discount-calculation.pipe';
import { Products } from '../shared/products.model';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let test;
  const price = new BehaviorSubject(0);
  const cart = new BehaviorSubject([]);
  const dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['deleteProduct'],
  {currentTotalPrice$ : price, currentProductsCart$ : cart});
  const item: Products = new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0.5);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, DiscountCalculationPipe],
      providers: [{provide: DataService, useValue: dataServiceSpy}],

    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current total price and shopping Cart', () => {
    component.ngOnInit();
    price.next(110.00);
    cart.next([{item: item, amount: 1, total: 110.00}]);
    component.currentTotal$.subscribe(num => expect(num).toBe(110.00));
    component.currentShoppingCart$.subscribe(ct => expect(ct).toEqual([{item: item, amount: 1, total: 110.00}]));
  })

  it('should delete product', () => {
    component.currentShoppingCart$.subscribe(ct => {
      component.deleteItem(ct[0]);
      test = ct[0];
    });
    expect(dataServiceSpy.deleteProduct).toHaveBeenCalledWith(test);
  })

  it('should show the image', () => {
    cart.next([{item: item, amount: 1, total: 110.00}]);
    component.ngOnInit();
    fixture.detectChanges();
    const img = fixture.debugElement.nativeElement.querySelector('.dropdown-img').src;
    expect(img).toContain('assets/image-product-1.jpg')
  });

  it('should show the item name', () => {
    cart.next([{item: item, amount: 1, total: 110.00}]);
    component.ngOnInit();
    fixture.detectChanges();
    const name = 'Fall Limited Edition Sneakers';
    const title = fixture.debugElement.nativeElement.querySelector('.dropdown-title')
    expect(title.innerHTML).toBe(name);
  });

});
