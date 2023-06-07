import { Component, Input } from '@angular/core';
import { Products } from '../shared/products.model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() item: Products;
  @Input() cart: number;
  //@Input() index: number;

  constructor(private router: Router, private dataService: DataService){}

  productDetail(){
    this.dataService.emitChangeCurrentProductInfo(this.item);
    this.dataService.emitChangeCurrentProductAmount(this.cart);
    this.router.navigate(['/product-detail', this.item.slug]);
  }
}