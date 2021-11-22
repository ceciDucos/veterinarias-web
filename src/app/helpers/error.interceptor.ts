import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientService } from '../services/client.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private clientService: ClientService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        this.clientService.logout();
      }
      if (err.status === 502) {
        err = 'Ocurrió un error con el Servidor.';
      }
      return throwError(err);
    }))
  }
}
