import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
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
    const search = document.getElementById('search')
    const keyup$ = fromEvent(search, 'keyup');
    
    keyup$.pipe(
      map((e:any) => e.currentTarget.value), debounceTime(1000)
    ).subscribe(console.log);
  }
}
