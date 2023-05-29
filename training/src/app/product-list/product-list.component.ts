import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Products } from '../shared/products.model';
import { load_productList } from '../state/ngrx/actions/list.actions';
import { selectAllItems } from '../state/ngrx/selectors/list.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(private store: Store){}

  ngOnInit(){
    this.store.dispatch(load_productList());
    this.products.subscribe(item => {
      this.productos = item;
      this.shoppingCart = new Array(this.productos.length).fill(0);
    });
  }

  productos = [];
  shoppingCart = [];
  products = this.store.select(selectAllItems);

  addToCart(amount : string, item: Products){
    let finalPrice = (item.price - (item.price * item.discount)) * +amount;
  }

}
