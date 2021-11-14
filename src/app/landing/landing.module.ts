import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingComponent } from './landing.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LandingComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    LandingComponent
  ],
  providers: [],
})
export class LandingModule { }
