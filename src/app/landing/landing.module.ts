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
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UserEditModalComponent } from './modals/edit-user-modal/edit-user-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgRatingBarModule } from 'ng-rating-bar';

@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent,
    AppointmentsPageComponent,
    NavbarComponent,
    FooterComponent,
    ProfilePageComponent,
    UserEditModalComponent,
  ],
  imports: [
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgRatingBarModule
  ],
  exports: [
    LandingComponent,
  ],
  providers: [
    DatePipe
  ],
})
export class LandingModule { }
