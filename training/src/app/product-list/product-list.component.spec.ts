import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { load_productList } from '../state/ngrx/actions/list.actions';
import { Products } from '../shared/products.model';
import { of } from 'rxjs';
import { selectAllItems } from '../state/ngrx/selectors/list.selectors';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  const initialState = {data: []};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({initialState})]
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
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(load_productList());
  });

  fit('should show the product list', () => {
    selectAllItems.projector({data: [new Products('Fall Limited Edition Sneakers', 'assets/image-product-1.jpg', 10, 'shoes', 'These low blabla', 220.00 , 0.5)], error: null, loading: false});
    component.ngOnInit();
    fixture.detectChanges();
    const listGroup  = fixture.debugElement.nativeElement.querySelectorAll('.list-group-item');
    console.log(listGroup)
    expect(listGroup.length).toBe(1);
  });

});
