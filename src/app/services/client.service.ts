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
  public $currentUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public $currentCISubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.$currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.$currentCISubject = new BehaviorSubject<string>(localStorage.getItem('currentCI'));
  }

  public get currentUserValue(): any {
    return this.$currentUserSubject.getValue();
  }

  public get currentCIValue(): any {
    return this.$currentCISubject.getValue();
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
      .pipe(map(token => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', token);
        localStorage.setItem('currentCI', username);
        this.$currentUserSubject.next(token);
        this.$currentCISubject.next(username);
        return token;
      }));
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
    this.$currentCISubject.next(user.cedula);
    await this.http.post(`${environment.apiUrl}/cliente`, { ...user }).toPromise().then(
      token => this.$currentUserSubject.next(token as string)
    );
  }

  getClient(cedula: number): Promise<any>   {
    return this.http.get(`${environment.apiUrl}/cliente`).toPromise();
  }

  getClient(){
    return null;
    //return this.http.get(`${environment.apiUrl}/cliente/${id}`).toPromise();
  }
}
