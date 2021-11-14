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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MessageHandlerComponent
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
