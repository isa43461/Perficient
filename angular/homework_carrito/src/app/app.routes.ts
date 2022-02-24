import { ProductInfoComponent } from "./product-info/product-info.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
export {rutas};

const rutas: Routes = [
    {
      path: '',
      component: ProductListComponent,
      pathMatch: 'full' 
    },
    {
      path: 'product-list/:slug',
      component: ProductInfoComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
  })
  export class AppRoutingModule{}