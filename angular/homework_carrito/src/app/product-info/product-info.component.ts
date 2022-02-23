import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../shared/products.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers : [DataService]
})
export class ProductInfoComponent implements OnInit, OnDestroy{

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.productInformation$.subscribe(prod => {
      console.log(prod);
    });
  }

  ngOnDestroy(): void {
      
  }

}
