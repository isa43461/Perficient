import { Component, OnInit } from '@angular/core';
import { Observable, generate } from 'rxjs';
import { map, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const obs = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
    });

    const sub = obs.subscribe(val => console.log(val));
  }
}
