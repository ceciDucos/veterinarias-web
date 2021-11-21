import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error-page/error-page.component';
import { AppointmentsPageComponent } from './landing/appointments-page/appointments-page.component';
import { HomePageComponent } from './landing/home-page/home-page.component';
import { LandingComponent } from './landing/landing.component';
import { ProfilePageComponent } from './landing/profile-page/profile-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'landing', component: LandingComponent,
    children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: HomePageComponent, pathMatch: 'full' },
      { path: 'appointments-page', component: AppointmentsPageComponent, pathMatch: 'full' },
      { path: 'profile-page', component: ProfilePageComponent, pathMatch: 'full' },
      //{ path: 'clients-detail', component: ClientDetailsComponent, pathMatch: 'full' },
    ],
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
