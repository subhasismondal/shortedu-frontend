import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QaserviceService {
  private baseUrl = 'http://65.20.72.240:8081/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allqa`);
  }

  create(data) {
    return this.http.post( `${this.baseUrl}/createqa`, data);
  }

}
