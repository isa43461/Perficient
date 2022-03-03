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
    const subject = new BehaviorSubject(1);

    subject.subscribe(console.log);
    subject.next(2);

    subject.subscribe(console.log)
  }
}
