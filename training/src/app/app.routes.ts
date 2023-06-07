import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
    {
      path: '',
      component: ProductListComponent,
      pathMatch: 'full' 
    },
    {
      path: 'product-detail/:slug',
      component: ProductDetailComponent
    }
];

@NgModule({
imports: [
  RouterModule,
  RouterModule.forRoot(routes)
],
exports: [RouterModule]
})

export class AppRoutingModule{}