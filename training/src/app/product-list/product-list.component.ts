import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from '../data.service';
import { Products } from '../shared/products.model';
import { load_productList } from '../state/ngrx/actions/list.actions';
import { selectAllItems } from '../state/ngrx/selectors/list.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(private store: Store, private dataService: DataService){}

  ngOnInit(){
    this.store.dispatch(load_productList());
    this.products = this.store.select(selectAllItems);
    this.products.subscribe(item => {
      this.productos = item;
      this.shoppingCart = new Array(this.productos.length).fill(0);
    });

  }

  productos = [];
  shoppingCart = [];
  products;

  addToCart(amount : number, item: Products){
    this.dataService.addProductToCart(item, amount);
  }

}
