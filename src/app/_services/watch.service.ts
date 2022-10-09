import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const WATCH_API = 'http://127.0.0.1:8000/api/watch/';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private http:HttpClient) { }

  getAllWatch(): Observable<any>{
    return this.http.get(WATCH_API + 'show', httpOptions)
  }

  getDetail(id:number){
    return this.http.get(WATCH_API + 'show/' + id, httpOptions)
  }
}
