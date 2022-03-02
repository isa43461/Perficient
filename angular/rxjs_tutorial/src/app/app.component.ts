import { Component } from '@angular/core';
import { pipe, of } from 'rxjs';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const nums = of(1,2,3,4,5);

    const alCuadrado = pipe(filter((n:number) => n%2 === 0), map(n => n*n));

    const cuadrado = alCuadrado(nums);

    cuadrado.subscribe(x => console.log(x));
  }
}
