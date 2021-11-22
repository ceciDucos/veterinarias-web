import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(
    private http: HttpClient,
    private clientService: ClientService
  ) { }

  async getAppointments(cedula: number): Promise<any> {
    return this.http.get(`${environment.apiUrl}/consultas?=cedula=${cedula}`).toPromise();
  }

  async changeAppointmentRating(appointmentRequest: any): Promise<any> {
    return this.http.put(`${environment.apiUrl}/consultas`, { ...appointmentRequest }).toPromise();
  }
}
