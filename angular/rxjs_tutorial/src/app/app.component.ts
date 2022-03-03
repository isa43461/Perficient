import { Component } from '@angular/core';
import { mergeMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const source = of(
      ajax.getJSON('https://api.github.com/users/ctmil'),
      ajax.getJSON('https://api.github.com/users/ibuioli'),
      );

    const obsConMap = source.pipe(mergeMap(v => v));

    obsConMap.subscribe(v => console.log(v));
  }
}
