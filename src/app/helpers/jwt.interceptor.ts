import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientService } from '../services/client.service';
import { MessageService } from '../message-handler/message.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private clientService: ClientService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.clientService.currentUserValue;

    const isLoggedIn = currentUser;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser}`
        }
      });
    }

    return next.handle(request);
  }
}
