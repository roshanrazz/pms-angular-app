import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  constructor(private http: HttpClient, private p: SharedDataService) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  visitId = this.p.getVisitId();

  addPrescriptionDetails(
    visitId: any,
    prescriptionDetails: any
  ): Observable<any> {
    const url =
      this.baseUrl + '/health-record-service/visit/prescription/' + visitId;
    return this.http.post(url, prescriptionDetails);
  }
}
