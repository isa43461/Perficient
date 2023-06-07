import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from 'src/app/shared/products.model';

@Injectable({  providedIn: 'root'})

export class ListService{
    productList: Products[] = [
        new Products('Fall Limited Edition Sneakers', ['assets/image-product-1.jpg', 'assets/image-product-2.jpg'], 10, 'sneakers-limited-edition', 'Versatile and fashionable sneakers crafted with attention to both style and comfort. They boast a flexible sole for ease of movement and showcase trendy design elements that make them suitable for various occasions and outfits.', 220.00 , 0.5),
        new Products('Fall Limited Edition Sneakers With A Rock', ['assets/image-product-3.jpg', 'assets/image-product-4.jpg'], 4, 'sneakers-limited-rock', "Sneakers are unique footwear that incorporate stone elements into their design. These sneakers feature stone accents, textures, or patterns, adding an earthy and natural aesthetic. They provide a distinctive and rugged look, allowing wearers to make a bold fashion statement inspired by nature's beauty.", 100.00 , 0.8)
      ];

    GetProductList(): Observable<Products[]>{
        return of(this.productList);
    }
  }