import { Component, OnInit } from '@angular/core';
import { VeterinariaService } from '../services/veterinaria.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(private veterinariaService: VeterinariaService) { }

  async ngOnInit() {
    try {
      const response = await this.veterinariaService.getVeterinarias();
      console.log(response);
      const veterinaria = await this.veterinariaService.getVeterinaria(1);
      console.log(veterinaria);
    } catch (error) {
      console.log(error);
    }
  }
}
