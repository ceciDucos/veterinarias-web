import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error-page/error-page.component';
import { LandingModule } from './landing/landing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageHandlerComponent } from './message-handler/message-handler.component';
import { MessageService } from './message-handler/message.service';
import { UserFormComponent } from './login/user-form.component.ts/user-form.component';
import { ClientService } from './services/client.service';
import { AppointmentService } from './services/appointment.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MessageHandlerComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    LandingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    ClientService,
    AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
