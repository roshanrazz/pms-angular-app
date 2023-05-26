import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodayAppointmentsService {
  constructor(private http: HttpClient, private DatePipe: DatePipe) {}

  appointmentDate = new Date();

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getallappointment(email: any): Observable<TodayAppointmentsService[]> {
    let todaysDate = this.DatePipe.transform(
      this.appointmentDate,
      'yyyy-MM-dd'
    );
    console.log(todaysDate);

    return this.http.get<TodayAppointmentsService[]>(
      this.baseUrl +
        `/appointment-service/appointment/${email}?acceptance=accepted&appointmentDate=` +
        todaysDate
    );
  }

  getRecentVisitDetails(patientId: any) {
    return this.http.get<any>(
      this.baseUrl + '/health-record-service/visit/recent/' + patientId
    );
  }
}
