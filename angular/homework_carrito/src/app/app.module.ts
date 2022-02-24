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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarritoComponent,
    HeaderComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
