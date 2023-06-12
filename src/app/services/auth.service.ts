import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://bullethellgame-back-production.up.railway.app/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  updateUser(id: number, email: string, username: string): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('auth-token'));

    const params = {
      id: id,
      email: email,
      name: username
    };

    return this.http.post('https://bullethellgame-back-production.up.railway.app/api/auth/updateUser', null, {headers: headers, params: params});
  }

}
