import { Component } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(){}

  ngOnInit(){
    const subject = new Subject<number>();
    subject.subscribe({
      next: (n) => console.log(`ObsA: ${n}`)
    });

    subject.subscribe({
      next: (n) => console.log(`ObsB: ${n + 1}`)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
  }
}
