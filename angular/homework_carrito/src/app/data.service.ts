import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from './shared/products.model';

@Injectable()
export class DataService {
  // Observable string sources
  private currentProductInfo = new BehaviorSubject<Products>(null);
  private totalProductsNumber = new BehaviorSubject<number>(0);

  // Observable string streams
  currentProductInfo$ = this.currentProductInfo.asObservable();
  totalProductsNumber$ = this.totalProductsNumber.asObservable();
  
  // Service message commands
  emitChangeCurrentProductInfo(change: any) {
      this.currentProductInfo.next(change);
  }

  emitChangeTotalProduct(change: any) {
    this.totalProductsNumber.next(change);
  }
}
