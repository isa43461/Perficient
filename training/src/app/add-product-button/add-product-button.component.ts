import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css']
})
export class AddProductButtonComponent {
  @Input() item : Products;
  @Input() i: number;
  @Input() shoppingCart: number[];
  @Output() productCart = new EventEmitter<string>();

  minus(i: number){
      if(this.shoppingCart[i] !== 0) this.shoppingCart[i] -= 1;
  }

  plus(i: number, item: Products){
    if(item.price > this.shoppingCart[i]){
      this.shoppingCart[i] += 1;
    }
  }

  addToCart(amount : number){
    this.productCart.emit(amount.toString());
  }
}