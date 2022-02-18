import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes: [FilterPipe]
})
export class DirectoryComponent implements OnInit {
  term = ""

  ninjas = [
    {name: "Yoshi",belt: "yellow belt"}, {name: "suli",belt: "pink belt"}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
