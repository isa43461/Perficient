import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoService {
  // Observable string sources
  private emitChangeSourceInfo = new Subject<any>();

  // Observable string streams
  changeEmitted = this.emitChangeSourceInfo.asObservable();
  
  // Service message commands
  emitChanges(change: any) {
      this.emitChangeSourceInfo.next(change);
  }
}
