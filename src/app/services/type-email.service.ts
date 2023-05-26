import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypeEmailService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9004";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  postLogin(data: any) {
    return this.http.post<any>(this.baseUrl + '/api/v1/send-otp', data, {
      withCredentials: true,
    });
  }
}
