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
    price.next(110.00);
    component.ngOnInit();
    cart.next([{item: item, amount: 1, total: 110.00}]);
    component.currentTotal$.subscribe(num => expect(num).toBe(110.00));
    let result;
    component.currentShoppingCart$.subscribe(ct => result = ct);
    expect(result).toEqual([{item: item, amount: 1, total: 110.00}])
  })

  it('should work the function delete item', () => {
    component.currentShoppingCart$.subscribe(ct => {
      component.deleteItem(ct[0]);
      test = ct[0];
    });
    expect(dataServiceSpy.deleteProduct).toHaveBeenCalledWith(test);
  })

  it('should delete item when the button is clicked', () => {
    const cartItem = {item: item, amount: 1, total: 110.00};
    cart.next([cartItem]);
    fixture.detectChanges();
    const deleteI = fixture.debugElement.nativeElement.querySelector('.delete-item');
    deleteI.click();
    fixture.detectChanges();
    expect(dataServiceSpy.deleteProduct).toHaveBeenCalledWith(cartItem);
  })

  it('should show the image', () => {
    component.ngOnInit();
    cart.next([{item: item, amount: 1, total: 110.00}]);
    fixture.detectChanges();
    const img = fixture.debugElement.nativeElement.querySelector('.dropdown-img').src;
    expect(img).toContain('assets/image-product-1.jpg')
  });

  it('should show the item name', () => {
    component.ngOnInit();
    cart.next([{item: item, amount: 1, total: 110.00}]);
    fixture.detectChanges();
    const name = 'Fall Limited Edition Sneakers';
    const title = fixture.debugElement.nativeElement.querySelector('.dropdown-title')
    expect(title.innerHTML).toBe(name);
  });

  it('should show the price and amount of the product', () => {
    component.ngOnInit();
    cart.next([{item: item, amount: 1, total: 110.00}]);
    fixture.detectChanges();
    const prodPrice = fixture.debugElement.nativeElement.querySelector('.dropdown-prices').innerHTML;

    expect(prodPrice).toBe('$110.00 x 1 = $110.00');
  })

  it('should show the sub total (ng container) when the condition is true', () => {
    component.ngOnInit();
    price.next(110.00);
    fixture.detectChanges();
    const totalP = fixture.debugElement.nativeElement.querySelector('.total-price').innerHTML;
    expect(totalP).toBe('Subtotal: $110.00');
  })

  it('should show the shopping cart empty', () => {
    component.ngOnInit();
    cart.next([]);
    fixture.detectChanges();
    const emp = fixture.debugElement.nativeElement.querySelector('.empty').innerHTML;
    expect(emp).toBe('The shopping cart is empty, please add a product!');
  })

  it('should show the checkout button when is NOT empty', () => {
    component.ngOnInit();
    cart.next([{item: item, amount: 1, total: 110.00}]);
    fixture.detectChanges();
    const checkoutBtn = fixture.debugElement.nativeElement.querySelector('div.btn-cart > button');
    checkoutBtn.click();
    //fixture.detectChanges();
    const modal = fixture.debugElement.nativeElement.querySelector('.modal-dialog').innerHTML;
    const modalCont = fixture.debugElement.nativeElement.querySelector('.modal-content').innerHTML;

    expect(modal).toContain(modalCont);
  })
});
