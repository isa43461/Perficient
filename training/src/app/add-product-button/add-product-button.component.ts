import { Component, Input } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.css']
})
export class AddProductButtonComponent {
  @Input() item : Products;
  @Input() i: number;
  @Input() shoppingCart: any[];
  @Input() products: Products[];

  minus(i: number){
      if(this.shoppingCart[i] !== 0) this.shoppingCart[i] -= 1;
  }

  plus(i: number){
    if(this.products[i].amount > this.shoppingCart[i]){
      this.shoppingCart[i] += 1;
    }
  }

  addToCart(item, amount){
    let finalPrice = (item.price - (item.price * item.discount)) * amount;
    console.log(item, amount, finalPrice);
  }
}
