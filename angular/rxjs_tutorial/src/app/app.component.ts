import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const src = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        ctmil: ajax.getJSON('https://api.github.com/users/ctmil')
      }
    );

    src.subscribe(console.log)
  }
}
