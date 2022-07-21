import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CAservice {

  private baseUrl = 'http://65.20.72.240:8081/api';

  constructor(private http: HttpClient) { }

  uploadca(data): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const req = new HttpRequest('POST', `${this.baseUrl}/uploadcas`, data, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  post(url: string, postData: Object) {
    return this.http.post(url, postData);
}

  getCAFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allcas`);
  }
}
