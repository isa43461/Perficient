import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homework_carrito';
  numeroCarrito = 0;

  recibiRespuesta(num : number){
    this.numeroCarrito += num;
  }
}
