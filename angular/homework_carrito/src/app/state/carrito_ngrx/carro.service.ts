import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from "src/app/model/api.model";
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable({  providedIn: 'root'})

export class Data_Service{

    constructor(private http: HttpClient) {}
  
    GetAPI(): Observable<any>{
      //try some HTTP request:
      return this.http.get("https://jsonplaceholder.typicode.com/todos/1/");
    }
  }