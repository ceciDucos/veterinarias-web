import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private http: HttpClient,
  ) { }

  async addUser(user: any): Promise<any> {
    return this.http.post(`${environment.apiUrl}/cliente`, { ...user }).toPromise();
  }
}
