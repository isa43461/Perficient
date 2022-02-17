import { Component, Output, EventEmitter } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products: Products[] = [
    new Products('Apple','Red Apple', 6),
    new Products('Tomatoes', 'Fresh Tomatoes', 4)
  ];
  ProductAmount = [0,0];

  constructor() { }
  
  @Output() enviar = new EventEmitter<number>()

  EnviarNumeroProducto(num: number){
    this.enviar.emit(num)
  }

  restarProducto(name: string, num: number){
    let n = this.products.length;
    for(let i = 0; i < n; i++){
      if(this.products[i].name === name){
        this.products[i].amount -= num;
      }
    }
    this.ProductAmount = [0,0];
  }

}
