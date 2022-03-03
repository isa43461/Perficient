import { Component } from '@angular/core';
import { Subject, interval, ConnectableObservable } from 'rxjs';
import { tap, multicast } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    
    const source = interval(3000).pipe(
      tap((n) => console.log('ID: ' + n))
    );

    const multi = source.pipe(multicast(()=> new Subject<number>())) as ConnectableObservable<any>;

    multi.subscribe(v => console.log('localhost:4200/' + v));
    multi.subscribe(v => console.log('localhost:4200/'+ (v-1)));

    multi.connect();

  }
}
