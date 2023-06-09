import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  private requestUrl = 'https://bullethellgame-back-production.up.railway.app/password/recover-request?userEmail=';
  private confirmUrl = 'https://bullethellgame-back-production.up.railway.app/password/updatePassword';

  constructor(private http: HttpClient) { }

  sendPasswordRequest(email: String): Observable<any> {
    return this.http.post(this.requestUrl+email, null);
  }

  confirmPasswordChange(token: string, newPassword: string) {
    let params = new HttpParams();
    params.append('token', token);
    params.append('newPassword', newPassword);

    return this.http.post(this.confirmUrl+'?token=' + token + "&newPassword=" + newPassword, null);
  }

}
