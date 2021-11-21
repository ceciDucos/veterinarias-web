import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingComponent } from './landing.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent,
    AppointmentsPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    LandingComponent
  ],
  providers: [
    DatePipe
  ],
})
export class LandingModule { }
