import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, merge } from 'rxjs';
import { map,tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const subject = new BehaviorSubject(0);
    const click$ = fromEvent(document, 'click').pipe(
      map((e: MouseEvent) => ({
        x: e.clientX,
        y: e.clientY
      }))
    );

    const interval$ = interval(1000).pipe(
      tap(v => subject.next(v))
    );

    merge(click$, interval$).subscribe(console.log)
  }
}
