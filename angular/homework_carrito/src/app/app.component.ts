import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'homework_carrito';
  numeroCarrito = 0;

  constructor(private dataService: DataService) {}

  private subProductNumber: any;

  ngOnInit(){
    this.subProductNumber =  this.dataService.totalProductsNumber$.subscribe(num => {
            this.numeroCarrito += num;
    });
  }

  ngOnDestroy(): void {
    this.subProductNumber.unsubscribe();
  }
}
