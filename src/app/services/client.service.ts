import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public $currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public $currentCISubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.$currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.$currentCISubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentCI')));
  }

  public get currentUserValue(): any {
    return this.$currentUserSubject.getValue();
  }

  public get currentCIValue(): any {
    return this.$currentCISubject.getValue();
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('currentCI', JSON.stringify(username));
        this.$currentUserSubject.next(user);
        console.log('username: ' + username);
        this.$currentCISubject.next(username);
        return user;
      }));
  }

  getHeaders() {
    const headers = {
      Authorization: `Bearer ${this.$currentUserSubject.getValue().token}`
    }
    return headers;
  }

  getToken() {
    return JSON.parse(localStorage.getItem('currentUser')).token;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.$currentUserSubject.next(null);

    localStorage.removeItem('currentCI');
    this.$currentCISubject.next(null);

    this.router.navigate(['/login']);
  }

  async addUser(user: any): Promise<any> {
    this.$currentUserSubject.next(user);
    this.$currentCISubject.next(user.cedula);
    return this.http.post(`${environment.apiUrl}/cliente`, { ...user }).toPromise();
  }
}
