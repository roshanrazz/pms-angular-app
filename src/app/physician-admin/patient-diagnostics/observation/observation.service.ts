import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Injectable({
  providedIn: 'root',
})
export class ObservationService {
  constructor(private http: HttpClient, private p: SharedDataService) {}

  visitId = this.p.getVisitId();

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  addObservationDetails(
    visitId: any,
    observationDetails: any
  ): Observable<any> {
    const url = this.baseUrl + '/health-record-service/visit/test/' + visitId;
    return this.http.post(url, observationDetails);
  }
}
