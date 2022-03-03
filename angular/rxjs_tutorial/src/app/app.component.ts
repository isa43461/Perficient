import { Component } from '@angular/core';
import { Subject, from, ConnectableObservable } from 'rxjs';
import { multicast } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const source = from([1,2,3,4]);
    const multi = source.pipe(multicast(()=> new Subject<number>())) as ConnectableObservable<any>;

    multi.subscribe({
      next: (n) => console.log(`ObsA: ${n}`)
    });

    multi.subscribe({
      next: (n) => console.log(`ObsB: ${n+1}`)
    });

    multi.connect();

  }
}
