import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewPrescriptionService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  getAllPrescription(visitId: any): Observable<ViewPrescriptionService[]> {
    return this.http.get<ViewPrescriptionService[]>(
      this.baseUrl + '/health-record-service/visit/prescription/' + visitId
    );
  }
}
