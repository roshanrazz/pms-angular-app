import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddVisitService {
  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  constructor(private http: HttpClient) {}

  postVisitData(pId: any, data: any) {
    return this.http.post<any>(
      this.baseUrl + '/health-record-service/visit/' + pId,
      data
    );
  }

  dataAdded = new Subject<boolean>();
}
