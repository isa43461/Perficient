import { Component } from '@angular/core';
import { concatMap, delay } from 'rxjs/operators';
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
    const source = of(2000, 1000, 3000);

    const obsConMap = source.pipe(concatMap(v => of(`valor: ${v}`).pipe(delay(v))));

    obsConMap.subscribe(v => console.log(v));
  }


}
