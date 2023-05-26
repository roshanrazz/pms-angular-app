import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionHistoryService {
  constructor(private http: HttpClient) {}

  // baseUrl:string="http://localhost:9001";
  baseUrl: string = 'https://spring-gateway.onrender.com';
  getPrescriptionHistory(prescriptionId: any) {
    return this.http.get<any>(
      this.baseUrl +
        '/health-record-service/visit/prescription/' +
        prescriptionId
    );
  }
}
