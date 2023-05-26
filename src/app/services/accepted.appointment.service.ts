import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AcceptedAppointmentService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  getAppointments() {
    return this.http.get<any>(
      this.baseUrl + '/appointment-service/appointment?acceptance=accepted'
    );
  }

  getPatientDetails(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/patient-info-service/patient?patientId=' + patientId
    );
  }
  getAllergies() {
    return this.http.get<any>(this.baseUrl + '/allergy-service/allergies');
    // return this.http.get<any>(
    // 'http://pms-g2.ddns.net/allergy-service/allergies'
    // );
  }
}
