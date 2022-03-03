import { Component } from '@angular/core';
import { scan, delay } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const src = of(1,2,3,4,5).pipe(delay(1000));
    const scaan = src.pipe(scan((a,c) => [...a, c], []));
    scaan.subscribe(val => console.log(val));
  }
}
