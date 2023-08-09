import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { DiscountCalculationPipe } from './shared/pipes/discount-calculation.pipe';
import { Products } from './shared/products.model';

export interface ShoppingCart{
  item: Products,
  amount: number,
  total: number
}

@Injectable({
  providedIn: 'root'
}) 
export class DataService {
  // Observable string sources
  constructor(private _discountPipe: DiscountCalculationPipe){
    this.currentTotalPrice$ = this.currentProductsCart$.pipe(map(lista => lista.reduce((current, value) => {
      return current + value.total;
    }, 0)))
  }

  //Observable cart items
  private currentProductsCart = new BehaviorSubject<ShoppingCart[]>([])
  private currentProductAmount = new BehaviorSubject<number>(0);

  // Observable string streams
  currentProductAmount$ = this.currentProductAmount.asObservable();
  currentProductsCart$ = this.currentProductsCart.asObservable();
  currentTotalPrice$;

  // Service message commands
  emitChangeCurrentProductAmount(amount: number){
    this.currentProductAmount.next(amount);
  }

  addProductToCart(info: Products, amount: number){
    let productCart = this.currentProductsCart.value;
    let currentProd = productCart.findIndex(prod => prod.item.name === info.name);
    let prod = productCart[currentProd];
    const productTotal = this._discountPipe.transform(info);
    if(currentProd > -1){
        prod.amount += amount;
        prod.total = productTotal * prod.amount;
    } else{
      if(amount != 0){
        let totalCalculation = productTotal * amount;
        productCart.push({item: info, amount: amount, total: totalCalculation});
      }
    }
    this.currentProductsCart.next(productCart);
  }

  deleteProduct(currentProd: ShoppingCart){
    let productCart = this.currentProductsCart.value;
    let prodIdnx = productCart.findIndex(prod => prod.item.name === currentProd.item.name);
    let newCart;
    if(prodIdnx > -1){
      newCart = productCart.filter(pd => pd.item !== productCart[prodIdnx].item)
      console.log(newCart)
    }
    this.currentProductsCart.next(newCart);
  }
}