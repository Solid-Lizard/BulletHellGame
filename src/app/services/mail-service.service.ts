import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private apiUrl = 'https://bullethellgame-back-production.up.railway.app/email';

  constructor(private http: HttpClient) { }

  sendMail (emailData: any): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}
