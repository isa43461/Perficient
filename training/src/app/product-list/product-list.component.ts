import { Component } from '@angular/core';
import { Products } from '../shared/products.model';
import { listService } from '../state/ngrx/services/list.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private listService: listService){}

  products = this.listService.GetProductList();

  shoppingCart = new Array().fill(0);

  addToCart(amount : string, item: Products){
    let finalPrice = (item.price - (item.price * item.discount)) * +amount;
  }

}
