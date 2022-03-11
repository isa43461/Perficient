import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { loadHttp_Api, load_fail,load_success } from './state/carrito_ngrx/carro.actions';
import { Store } from '@ngrx/store';
import { selectAllCars, selectLoading } from './state/carrito_ngrx/carro.selectors';
import { Api } from './model/api.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  isLoading$ : Observable<boolean>;
  title = 'homework_carrito';
  numeroCarrito = 0;

  constructor(private dataService: DataService, private store: Store) {}

  private subProductNumber: any;

  ngOnInit(){
    this.subProductNumber =  this.dataService.totalProductsNumber$.subscribe(num => {
            this.numeroCarrito += num;
    });
    this.isLoading$ = this.store.select(selectLoading)
  }


  load(){
    this.store.dispatch(loadHttp_Api());
  }

  ngOnDestroy(): void {
    this.subProductNumber.unsubscribe();
  }
}
