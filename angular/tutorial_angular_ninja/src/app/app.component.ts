import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial_angular_ninja';
  ninja = {
    name: "Yoshi",
    belt: "black",
  };

  yell(e){
    alert("I am yelling")
  }
}
