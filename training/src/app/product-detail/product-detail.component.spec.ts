import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../data.service';
import { DiscountCalculationPipe } from '../shared/pipes/discount-calculation.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Products } from '../shared/products.model';
import { BehaviorSubject, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { selectAllItems, selectLoading } from '../state/ngrx/selectors/list.selectors';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let store: MockStore;
  let route: ActivatedRoute;
  const params = new BehaviorSubject(null);
  const currentAmount = new BehaviorSubject(0);
  const activatedRouteMock = {params};
  const initialState = {data: [] , error: null, loading: false};
  const dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['addProductToCart'], {currentProductAmount$ : currentAmount});

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent, DiscountCalculationPipe],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [DataService, DiscountCalculationPipe,
                provideMockStore({initialState, selectors: [
                  {selector: selectLoading, value: initialState.loading},
                  {selector: selectAllItems, value: initialState.data}
                ]}),
                {provide: DataService, useValue: dataServiceSpy},
                {provide: ActivatedRoute, useValue: activatedRouteMock}],
    });
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the product with the slug indicated', () => {
    spyOn(store, 'select').and.returnValue(
      of(new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg', 'assets/image-product-2.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0.5))
    );;

    params.next('sneakers-limited-edition');
    currentAmount.next(1);
    component.ngOnInit();
    fixture.detectChanges();
    component.currentAmount$.subscribe(num => expect(num).toBe(1));
    const imgF  = fixture.debugElement.nativeElement.querySelector('.img-fluid');
    const minis  = fixture.debugElement.nativeElement.querySelectorAll('.mini-images');
    const title  = fixture.debugElement.nativeElement.querySelector('div.title > h1');
    const desc  = fixture.debugElement.nativeElement.querySelector('div.description > blockquote');

    expect(minis[0].src).toContain('assets/image-product-1.jpg');
    expect(minis[1].src).toContain('assets/image-product-2.jpg');
    expect(imgF.src).toContain('assets/image-product-1.jpg');
    expect(title.innerHTML).toBe('Fall Limited Edition Sneakers');
    expect(desc.innerHTML).toBe('These low blabla');
  });

  it('should show the product without discount', () => {
    spyOn(store, 'select').and.returnValue(
      of(new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg', 'assets/image-product-2.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0))
    );;

    params.next('sneakers-limited-edition');
    currentAmount.next(1);
    component.ngOnInit();
    fixture.detectChanges();
    const noDiscount  = fixture.debugElement.nativeElement.querySelector('.finalPrice');
    expect(noDiscount.innerHTML).toBe('$220.00');
  });

  it('should show the product with discount', () => {
    spyOn(store, 'select').and.returnValue(
      of(new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg', 'assets/image-product-2.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0.5))
    );;

    params.next('sneakers-limited-edition');
    currentAmount.next(1);
    component.ngOnInit();
    fixture.detectChanges();
    const price = fixture.debugElement.nativeElement.querySelector('.finalPrice')
    const dsc = fixture.debugElement.nativeElement.querySelector('.discount')
    const oldP = fixture.debugElement.nativeElement.querySelector('.oldPrice')
    expect(price.innerHTML).toBe('$110.00');
    expect(dsc.innerHTML).toBe('50%');
    expect(oldP.innerHTML).toBe('$220.00');
  });

  it('should change the pp image when clicked', () => {
    spyOn(store, 'select').and.returnValue(
      of(new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg', 'assets/image-product-2.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0))
    );;

    params.next('sneakers-limited-edition');
    currentAmount.next(1);
    component.ngOnInit();
    fixture.detectChanges();

    const imgF  = fixture.debugElement.nativeElement.querySelector('.img-fluid');
    const minis  = fixture.debugElement.nativeElement.querySelectorAll('.mini-images');
    minis[1].click(); 
    fixture.detectChanges();
    expect(imgF.src).toContain('assets/image-product-2.jpg');
    minis[0].click(); 
    fixture.detectChanges();
    expect(imgF.src).toContain('assets/image-product-1.jpg');
  });

  it('should work the function getImageSrc', () => {
    component.getImageSrc('assets/image-product-2.jpg');
    expect(component.imgSource).toBe('assets/image-product-2.jpg');
  })

  it('should work the function addToCart', () => {
    const item: Products = new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'sneakers-limited-edition', 'These low blabla', 220.00 , 0.5);
    component.addToCart('1', item);
    expect(dataServiceSpy.addProductToCart).toHaveBeenCalledWith(item, +'1');
  })

});
