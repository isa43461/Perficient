import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Products } from '../shared/products.model';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit, OnDestroy{

  constructor(private dataService: DataService) { }

  currentProd$ = new Observable<Products>();

  ngOnInit(){
    this.currentProd$ = this.dataService.currentProductInfo$;
  }

  ngOnDestroy(): void {
      
  }

}
