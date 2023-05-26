import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from 'src/app/shared/products.model';

@Injectable({  providedIn: 'root'})

export class listService{
    productList: Products[] = [
        new Products('Fall Limited Edition Sneakers', 'assets/image-product-1.jpg', 10, 'shoes', 'These low blabla', 220.00 , 0.5),
        new Products('Fall Limited Edition Sneakers With A Rock', 'assets/image-product-3.jpg', 4, 'shoes', 'rock', 100.00 , 0.8)
      ];

    GetProductList(): Observable<Products[]>{
        return of(this.productList);
    }
  }