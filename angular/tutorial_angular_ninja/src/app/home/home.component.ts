import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [LoggingService]
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the homepage....';
  myString = "I love chicken";

  @Input() ninja;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  alertMe(val){
    alert(val)
  }

  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  }
  
  ngOnInit(): void {
  }

}
