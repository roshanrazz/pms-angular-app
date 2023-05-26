import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  postAppointment(data: any) {
    return this.http.post<any>(
      this.baseUrl + '/appointment-service/appointment',
      data
    );
  }

  getAllPhysician(date: any) {
    return this.http.get<any>(
      this.baseUrl +
        '/physician-availability-service/physician-availability/' +
        date
    );
  }
}
