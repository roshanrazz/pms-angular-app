import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  deleteAppointment(appointmentId: number) {
    return this.http.delete(
      this.baseUrl + `/appointment-service/appointment/${appointmentId}`
    );
  }

  // private baseUrl =  'http://localhost:9002/appointment';
  getallappointment(email: any): Observable<AppointmentService[]> {
    return this.http.get<AppointmentService[]>(
      this.baseUrl +
        `/appointment-service/appointment/${email}?acceptance=pending`
    );
  }

  updateAppointment(appointmentId: number) {
    const updatedData = {
      acceptance: 'Accepted',
    };
    return this.http.put(
      this.baseUrl + `/appointment-service/appointment/${appointmentId}`,
      updatedData
    );
  }

  sendNotification(data: any) {
    return this.http.post<any>(
      this.baseUrl + '/api/v1/email-notification',
      data
    );
  }

  getPatientDetails(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/patient-info-service/patient?patientId=' + patientId
    );
  }
}
