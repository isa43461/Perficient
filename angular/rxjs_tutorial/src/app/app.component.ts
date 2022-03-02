import { Component } from '@angular/core';
import { delay, take} from 'rxjs/operators';
import { forkJoin, of, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const fork = forkJoin(
      of('Hola'),
      of('Mundo').pipe(delay(500)),
      interval(1000).pipe(take(2))
    );

    fork.subscribe(val=> console.log(val))
  }
}
