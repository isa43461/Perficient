import { Component } from '@angular/core';
import { interval, fromEvent, merge, empty} from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const remainingLabel = document.getElementById('remaining');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    const obsInterval = interval(1000).pipe(mapTo(-1));
    const pause = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume).pipe(
      startWith(true),
      switchMap(val => (val ? obsInterval : empty())),
      scan((acc,curr) => (curr ? curr + acc : acc), 10),
      takeWhile(v => v >= 0)
    )
    .subscribe((val:any) => (remainingLabel.innerHTML = val))
  }
}
