import { ProductListComponent } from "./product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: ProductListComponent,
      pathMatch: 'full' 
    },
];

@NgModule({
imports: [
  RouterModule,
  RouterModule.forRoot(routes)
],
exports: [RouterModule]
})

export class AppRoutingModule{}