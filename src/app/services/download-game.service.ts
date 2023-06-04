import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadGameService {

  constructor(private httpClient: HttpClient) { }

  downloadGame(): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('auth-token')); // Set another header

    return this.httpClient.get('https://bullethellgame-back-production.up.railway.app/download',  {
      headers: headers,
      responseType: 'blob',
      observe: 'response' // Include the full HTTP response
    });

  }
}
