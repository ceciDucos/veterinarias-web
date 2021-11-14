import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  public active = 0;

  constructor() { }

  changeActive(index) {
    this.active = index;
  }
}
