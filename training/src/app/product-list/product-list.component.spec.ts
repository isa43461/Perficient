import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { load_productList } from '../state/ngrx/actions/list.actions';
import { Products } from '../shared/products.model';
import { DataService } from '../data.service';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  const initialState = {data: [] , error: null, loading: false};
  const dataServiceSpy = jasmine.createSpyObj<DataService>('DataService', ['addProductToCart']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({initialState}), {provide: DataService, useValue: dataServiceSpy}]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should dispatch product list', () => {
    spyOn(store, 'dispatch');
    spyOn(store, 'select').and.returnValue(
      of([
        new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'shoes', 'These low blabla', 220.00 , 0.5)])
    );
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(load_productList());
  });

  
  it('should show the product list', () => {
    spyOn(store, 'select').and.returnValue(
      of([
        new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'shoes', 'These low blabla', 220.00 , 0.5)])
    )
    component.ngOnInit();
    fixture.detectChanges();
    const listGroup  = fixture.debugElement.nativeElement.querySelectorAll('.list-group-item');
    expect(listGroup.length).toBe(1);
  });

  it('should add to cart', () => {
    const item: Products = new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg'], 10, 'shoes', 'These low blabla', 220.00 , 0.5);
    component.addToCart(1, item);
    expect(dataServiceSpy.addProductToCart).toHaveBeenCalledWith(item, 1);
  })

})
