import { Component } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Products[] = [
    new Products('Fall Limited Edition Sneakers', 'assets/image-product-1.jpg', 10, 'shoes', 'These low blabla', 220.00 , 0.5),
    new Products('Fall Limited Edition Sneakers With A Rock', 'assets/image-product-3.jpg', 4, 'shoes', 'rock', 100.00 , 0.8)
  ];

  shoppingCart = new Array(this.products.length).fill(0)

  //constructor(private router: Router){}

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
