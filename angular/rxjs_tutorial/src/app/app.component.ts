import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const time = timer(1000);

    const obs = time.pipe(
      tap(()=> console.log('TAP ON')),
      mapTo('End OBS')
      );

    const subs = obs.subscribe(val => console.log(val));
    const subs2 = obs.subscribe(val => console.log(val));

    const shareobs = obs.pipe(share());

    console.log('SHARE ON');
    const subs3 = shareobs.subscribe(val => console.log(val))
    const subs4 = shareobs.subscribe(val => console.log(val))

  }
}
