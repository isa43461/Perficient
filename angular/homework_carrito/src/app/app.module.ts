import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductInfoComponent } from './product-info/product-info.component'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';
import { DataService } from './data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { carReducer } from './state/carrito_ngrx/carro.reducer';
import { CarEffects } from './state/carrito_ngrx/carro.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarritoComponent,
    HeaderComponent,
    ProductInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({cars: carReducer}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CarEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
