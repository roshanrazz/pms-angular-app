import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ForgetPasswordService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9004";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  OTPverfication(data: any) {
    return this.http.post<any>(this.baseUrl + '/api/v1/verify-otp', data, {
      withCredentials: true,
    });
  }
}
