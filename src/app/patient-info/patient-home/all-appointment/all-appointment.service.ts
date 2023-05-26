import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllAppointmentService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getAllAppointments(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/appointment-service/patient/' + patientId
    );
  }
}
