import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  fetchData(){
    return this.httpClient.get('https://nn-angular-isa-default-rtdb.firebaseio.com/.json')
  }
}
