import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaService {
  constructor(
    private http: HttpClient,
  ) { }

  async getVeterinarias(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/veterinaria`).toPromise();
  }

  async getVeterinaria(id: number): Promise<any> {
    return this.http.get(`${environment.apiUrl}/veterinaria/${id}`).toPromise();
  }
}
