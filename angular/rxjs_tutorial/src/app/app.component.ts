import { Component } from '@angular/core';
import { interval, fromEvent} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe(console.log)
  }
}
