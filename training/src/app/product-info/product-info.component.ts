import { Component, Input } from '@angular/core';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  @Input() item: Products;
}