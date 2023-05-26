import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicalRecordsService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getPatientDetails(pId: any) {
    return; //this.http.get<any>('');
  }

  getPatientVisitHistory(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/health-records-service/visit/allvisits/' + patientId
    );
  }
  getPatientAppointment(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/patient-info-service/patient/' + patientId
    );
  }

  //   getPatientVisitHistoryTest(visitId: any) {
  //     return this.http.get<any>('http://localhost:9006/visit/test/' + visitId);
  //   }
}
