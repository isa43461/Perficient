import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const timer = interval(500);

    const buffer = timer.pipe(bufferTime(2000, 1000));

    const subs = buffer.subscribe(val => console.log('Buffer:', val))
  }
}
