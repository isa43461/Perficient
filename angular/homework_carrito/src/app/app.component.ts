import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Products } from './shared/products.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'homework_carrito';
  numeroCarrito = 0;

  constructor(private dataService: DataService) {}

  private subProductNumber: any;
  private subProductDesc: any;

  ngOnInit(){
    this.subProductNumber =  this.dataService.totalProductsNumber$.subscribe(num => {
            this.numeroCarrito += num;
    });
    this.subProductDesc = this.dataService.currentProductInfo$.subscribe(text => {
        this.EnviarProducto(text);
    });
  }

  EnviarProducto(name: Products) {
    this.dataService.emitChangeProductInfo(name);
  }

  ngOnDestroy(): void {
    this.subProductNumber.unsubscribe();
    //this.subProductDesc.unsubscribe();
  }
}
