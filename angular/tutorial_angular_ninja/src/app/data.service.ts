import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  fetchData(){
    return this.httpClient.get('ninjas.json').pipe(map((res:Response) => res.json()))
  }
}
