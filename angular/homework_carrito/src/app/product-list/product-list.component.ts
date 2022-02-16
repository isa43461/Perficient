import { Component, OnInit } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductAmount = 0;
  products: Products[] = [
    new Products('Apple','Red Apple' ,5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
