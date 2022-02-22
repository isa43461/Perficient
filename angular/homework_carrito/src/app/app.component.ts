import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [DataService]
})
export class AppComponent {
  title = 'homework_carrito';
  productName = "";
  numeroCarrito = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.changeEmitted$.subscribe(text => {
      if(typeof(text) === 'number'){
        this.numeroCarrito += text;
      }
      else{
        alert(text);
      }
    });
  }
}
