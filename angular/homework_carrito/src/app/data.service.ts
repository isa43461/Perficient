import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Products } from './shared/products.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Observable string sources
  private currentProductInfo = new Subject<Products>();
  private totalProductsNumber = new Subject<number>();

  private productInformation = new Subject<Products>();

  // Observable string streams
  currentProductInfo$ = this.currentProductInfo.asObservable();
  totalProductsNumber$ = this.totalProductsNumber.asObservable();

  productInformation$ = this.productInformation.asObservable();
  
  // Service message commands
  emitChangeCurrentProductInfo(change: any) {
      this.currentProductInfo.next(change);
  }

  emitChangeTotalProduct(change: any) {
    this.totalProductsNumber.next(change);
  }

  emitChangeProductInfo(change: any) {
    this.productInformation.next(change);
  }

}
