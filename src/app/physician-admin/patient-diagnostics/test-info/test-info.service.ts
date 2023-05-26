import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestInfoService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getAllTest(visitId: any) {
    return this.http.get<any>(
      this.baseUrl + '/health-record-service/visit/test/' + visitId
    );
  }
}
