import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'https://bullethellgame-back-production.up.railway.app/user';

  constructor (private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('auth-token'));

    return this.http.get(this.apiUrl + "/allUsers", {headers: headers});

  }

  deleteUser(id: any): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('auth-token'));

    return this.http.delete(this.apiUrl + '/delete/' + id, {headers: headers});
  }

}
