import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css']
})
export class AddProductButtonComponent {
  @Input() item : Products;
  @Input() cart: number;
  @Output() productCart = new EventEmitter<string>();

  minus(){
    if(this.cart !== 0) this.cart -= 1;
  }

  plus(){
    if(this.item.price > this.cart) this.cart += 1;
  }

  addToCart(amount : number){
    this.productCart.emit(amount.toString());
  }
}