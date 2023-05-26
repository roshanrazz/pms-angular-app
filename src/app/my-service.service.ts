import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patientinfo } from './admin/home/patient/patientinfo';
import { Physician } from './admin/home/physician/physician';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';

  getAllPatients(): Observable<Patientinfo[]> {
    return this.http.get<Patientinfo[]>(
      `${this.baseUrl}/patient-info-service/patients`
    );
  }

  getAllAvailability(): Observable<Physician[]> {
    return this.http.get<Physician[]>(
      this.baseUrl + '/physician-availability-service/physician-availability'
    );
  }
  updatePhysician(
    physicianId: number,
    physician: Physician
  ): Observable<Physician> {
    console.log(physicianId);
    console.log(physician);
    // console.log("dsfsfsfsd");
    return this.http.put<Physician>(
      this.baseUrl +
        '/physician-availability-service/physician-availability/' +
        physicianId,
      physician
    );
  }

  getAllAppointments() {
    return this.http.get<any>(
      this.baseUrl + '/appointment-service/appointments'
    );
  }

  getAllNurses() {
    return this.http.get<any>(this.baseUrl + '/auth0-service/pms/nurses');
  }

  getAllAdmin() {
    return this.http.get<any>(this.baseUrl + '/auth0-service/pms/admin');
  }
}
