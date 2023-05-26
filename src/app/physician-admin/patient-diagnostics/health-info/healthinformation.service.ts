import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Injectable({
  providedIn: 'root',
})
export class HealthinformationService {
  constructor(private http: HttpClient, private sd: SharedDataService) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getAlltestdetails(visitId: any) {
    return this.http.get<any>(
      this.baseUrl + '/health-record-service/visit/test/' + visitId
    );
  }

  getPatientDetails(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/patient-info-service/patient?patientId=' + patientId
    );
  }

  getHealthDetails(patientId: any) {
    // return this.http.get<any>('http://localhost:9006/visit/' + visitId);
    return this.http.get<any>(
      this.baseUrl + '/health-record-service/visit/recent/' + patientId
    );
  }

  deleteTest(testId: any) {
    return this.http.delete(
      this.baseUrl + `/health-record-service/visit/test/` + testId
    );
  }
}
