import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    
    const obs = new ReplaySubject(4);

    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.subscribe(console.log);

    obs.next(4);
    obs.next(5);

    obs.subscribe(console.log);
  }
}
