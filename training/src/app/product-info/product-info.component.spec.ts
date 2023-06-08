import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { DiscountCalculationPipe } from '../shared/pipes/discount-calculation.pipe';
import { Products } from '../shared/products.model';
import { ProductInfoComponent } from './product-info.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('ProductInfoComponent', () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;
  const item: Products = new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0.5);
  const dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['emitChangeCurrentProductAmount'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductInfoComponent, 
        DiscountCalculationPipe
      ],
      providers: [DataService, DiscountCalculationPipe, provideMockStore({}), {provide: DataService, useValue: dataServiceSpy}],
    });
    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    component.item  = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the image', () => {
    const img = fixture.debugElement.nativeElement.querySelector('div.image>img').src
    expect(img).toContain('assets/image-product-1.jpg');
  });

  it('should show the item name', () => {
    const name = 'Fall Limited Edition Sneakers';
    const title = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(title.innerHTML).toBe(name);
  });
  
  it('should show when the item has the discount', () => {
    component.item.discount = 0.5;
    fixture.detectChanges();
    const price = fixture.debugElement.nativeElement.querySelector('.finalPrice')
    const dsc = fixture.debugElement.nativeElement.querySelector('.discount')
    const oldP = fixture.debugElement.nativeElement.querySelector('.oldPrice')
    expect(price.innerHTML).toBe('$110.00');
    expect(dsc.innerHTML).toBe('50%');
    expect(oldP.innerHTML).toBe('$220.00');

  });

  it('should show when the item does not have discount', () => {
    component.item.discount = 0;
    fixture.detectChanges();
    const price = fixture.debugElement.nativeElement.querySelector('.finalPrice')
    expect(price.innerHTML).toBe('$220.00');
  });

  it('should send info to product detail', inject([Router], (router: Router) =>{
    const spy = spyOn(router, 'navigate');    
    component.productDetail();
    expect(dataServiceSpy.emitChangeCurrentProductAmount).toHaveBeenCalled();
    expect(spy.calls.first().args[0]).toEqual(['/product-detail', 'sneakers-limited-edition']);
  }))

});
