import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';
  observable : any;

  ngOnInit(){
    const el = document.getElementById('elemento');

    const mouse = fromEvent(el,'mousemove');

    mouse.subscribe((e: MouseEvent)=>{
      console.log(`Coords: x: ${e.clientX}, y: ${e.clientY}`);
    });
  }
}
