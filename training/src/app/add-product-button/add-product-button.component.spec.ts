import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Products } from '../shared/products.model';

import { AddProductButtonComponent } from './add-product-button.component';

describe('AddProductButtonComponent', () => {
  let component: AddProductButtonComponent;
  let fixture: ComponentFixture<AddProductButtonComponent>;
  const item: Products = new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'shoes', 'These low blabla', 220.00 , 0.5);
  let cart: number = 0;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductButtonComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(AddProductButtonComponent);
    component = fixture.componentInstance;
    component.item  = item;
    component.cart = cart;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increments the count', () => {
    const incrementButton = fixture.debugElement.nativeElement.querySelectorAll('.plusminus')[1]
    incrementButton.click();
    incrementButton.click();

    const input = fixture.debugElement.nativeElement.querySelector('.form-control');
    fixture.detectChanges();
    expect(input.getAttribute("ng-reflect-model")).toBe('2');
  });

  it('should decrements the count', () => {
    component.cart = 4;
    const decrementButton = fixture.debugElement.nativeElement.querySelectorAll('.plusminus')[0]
    decrementButton.click();
    const input = fixture.debugElement.nativeElement.querySelector('.form-control');
    fixture.detectChanges();

    expect(input.getAttribute("ng-reflect-model")).toBe('3');
  });

  it('should emit on click', () => {
    spyOn(component.productCart, 'emit');

    const addToCartButton = fixture.debugElement.nativeElement.querySelector('.cart')
    addToCartButton.click();
    fixture.detectChanges();

    expect(component.productCart.emit).toHaveBeenCalledWith(cart.toString());


  })
});
