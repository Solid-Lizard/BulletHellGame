import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MailServiceService {

  private apiUrl = 'https://bullethellgame-back-production.up.railway.app/email';
 
  constructor(private http: HttpClient) { }

  sendMail (emailData: any): Observable<any> {    
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('auth-token'));

      console.log(headers.get('Authorization'));

    return this.http.post(this.apiUrl, emailData, {headers: headers});

  }
}
