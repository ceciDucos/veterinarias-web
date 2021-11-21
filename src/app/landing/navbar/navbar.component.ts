import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  public active = 0;

  constructor(private clientService: ClientService) { }

  changeActive(index) {
    this.active = index;
  }

  logOutUser() {
    this.clientService.logout();
  }
}
