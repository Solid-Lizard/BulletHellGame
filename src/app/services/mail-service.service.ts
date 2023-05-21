import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private apiUrl = 'apiUrl';

  constructor(private http: HttpClient) { }

  sendMail (emailData: any): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}
