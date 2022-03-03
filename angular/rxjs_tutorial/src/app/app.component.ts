import { Component } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs_tutorial';

  constructor(public obs: ObsService){}

  ngOnInit(){
    forkJoin(
      this.obs.getGithub('ctmil'),
      this.obs.getGithub('odoo'),
      this.obs.getGithub('angular')
      ).subscribe((res) => {
        console.log(res);
      });
  }
}
