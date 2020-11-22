import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  myAppUrl = 'https://localhost:5001/';
  myApiUrl = 'api/Contact';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(this.myAppUrl + this.myApiUrl + id);
  }

  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.myAppUrl + this.myApiUrl, contact, this.httpOptions);
  }
}
