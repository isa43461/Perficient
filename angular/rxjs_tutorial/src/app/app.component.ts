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
    generate(
      1, i => i <= 5, i => i + 1
    ).subscribe(console.log);
  }
}
