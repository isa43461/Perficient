import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, ShoppingCart } from '../data.service';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private dataService: DataService) { }

  currentTotal$ = new Observable<number>();
  currentShoppingCart$ = new Observable<ShoppingCart[]>();

  ngOnInit(){
    this.currentTotal$ = this.dataService.currentTotalPrice$
    this.currentShoppingCart$ = this.dataService.currentProductsCart$;
  }


  deleteItem(item: ShoppingCart){
    this.dataService.deleteProduct(item);
  }
}
