import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductButtonComponent } from './add-product-button/add-product-button.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DiscountCalculationPipe } from './shared/pipes/discount-calculation.pipe';
import { DataService } from './data.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { listReducer } from './state/ngrx/reducers/list.reducers';
import { listEffects } from './state/ngrx/effects/list.effects';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    AddProductButtonComponent,
    ProductInfoComponent,
    DiscountCalculationPipe,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({list: listReducer}),
    EffectsModule.forRoot([listEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
