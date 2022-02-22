import { Component, Output, EventEmitter } from '@angular/core';
import { Products } from '../shared/products.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  products: Products[] = [
    new Products('Apple','Red Apple', 6, 'apple'),
    new Products('Tomatoes', 'Fresh Tomatoes', 4, 'tomatoes'),
    new Products('Pineapple', 'Sweet Pineapple', 10, 'pineapple'),
    new Products('Ice Cream', 'Strawberry Ice Cream', 2, 'ice-cream')
  ];
  ProductAmount = [0,0,0,0];
  
  /*@Output() enviar = new EventEmitter<number>()
  @Output() enviarNombre = new EventEmitter<string>()


  EnviarNumeroProducto(num: number){
    this.enviar.emit(num)
  }

  EnviarNombreProducto(name: string){
    this.enviarNombre.emit(name)
  }*/
  restarProducto(name: string, num: number){
    let n = this.products.length;
    for(let i = 0; i < n; i++){
      if(this.products[i].name === name){
        this.products[i].amount -= num;
      }
    }
    this.ProductAmount = [0,0,0,0];
  }

  constructor(private dataService: DataService) {}

  EnviarNombreProducto(name: string) {
      this.dataService.emitChange(name);
  }

  EnviarNumeroProducto(num: number){
    this.dataService.emitChange(num)
  }

}
