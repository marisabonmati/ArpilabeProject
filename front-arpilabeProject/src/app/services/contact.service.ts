import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  myAppUrl = 'https://localhost:5001/';
  myApiUrl = 'api/Contact';

  httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
}
