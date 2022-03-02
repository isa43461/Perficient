import { Component } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const timer = interval(1000).pipe(take(4));

    const rango = range(1,10);

    const result = concat(timer,rango);

    result.subscribe(x => console.log(x));
  }
}
