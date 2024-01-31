import { Injectable } from '@angular/core';
import { Coordinates } from './model/coordinates.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  sendCoordinates(coordinates : Coordinates) : Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/messages/publish', coordinates);
  }
}
