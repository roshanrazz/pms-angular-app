import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  ispatientLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  postLogin(data: any) {
    return this.http.post<any>(
      this.baseUrl + '/authentication-service/login',
      data
    );
  }
}
