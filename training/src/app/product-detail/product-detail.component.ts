import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap, tap } from 'rxjs';
import { DataService } from '../data.service';
import { Products } from '../shared/products.model';
import { selectProductDetail } from '../state/ngrx/selectors/list.selectors';
import { ListService } from '../state/ngrx/services/list.services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  constructor(private dataService: DataService, private route: ActivatedRoute,
     private router: Router , private store: Store , /*private listService: ListService*/) { }

  currentAmount$ = new Observable<number>();
  currentProd$ = new Observable<Products>();
  imgSource: string;
  totalPrice: number;
  product : Products;
  cart: number;

  ngOnInit(){
    this.currentProd$ = this.route.params.pipe(
      switchMap(params => {
         return this.store.select(selectProductDetail({ slug: params.slug }))
      }))
    this.currentProd$.subscribe(prod => {
      if(prod){
        this.product = prod;
        this.imgSource = prod.src[0];
      } else{
        this.router.navigateByUrl('/')
      }
    }) 
    
    /*this.currentProd$ = this.dataService.currentProductInfo$;
    this.currentProd$.subscribe(item => {
      if(!item){
       this.route.params.subscribe(params => {
          this.listService.GetProductList().subscribe(array => {
            array.forEach(prod => {
              if(prod.slug === params.slug) this.product = prod;
            })
          })
        }); 
      } else{
        this.product = item
      }
    });
    this.imgSource = this.product.src[0];
    */
    this.currentAmount$ = this.dataService.currentProductAmount$;
    this.currentAmount$.subscribe(num => this.cart = num);
    this.totalPrice = 0;
  }

  getImageSrc(src: string){
    this.imgSource = src;
  }

  addToCart(amount : string, item: Products){
    this.dataService.addProductToCart(item, +amount);
  }
}
