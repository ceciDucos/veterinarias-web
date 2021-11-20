import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(
    private http: HttpClient,
  ) { }

  async getAppointments(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/consulta`).toPromise();
  }
}