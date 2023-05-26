import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  postRegister(data: any) {
    return this.http.post<any>(
      this.baseUrl + '/authentication-service/register',
      data
    );
  }
}
