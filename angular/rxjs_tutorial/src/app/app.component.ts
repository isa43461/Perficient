import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(tap(ev => console.log('Procesado' + ev)));
    positions.subscribe(pos => console.log(pos))
  }
}
