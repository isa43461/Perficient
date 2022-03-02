import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';
  observable : any;

  ngOnInit(){
    const contador = interval(1000);
    
    
    contador.subscribe((n)=>{
      console.log(`cada ${n} segundos`);
    });
  }
}
