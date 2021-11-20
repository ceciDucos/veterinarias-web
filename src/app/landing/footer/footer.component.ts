import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VeterinariaService } from 'src/app/services/veterinaria.service';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {

  public veterinarias = [];

  constructor(private veterinariaService: VeterinariaService) 
  { 
    
  }

  async ngOnInit() {
    try 
    {
      this.veterinarias = await this.veterinariaService.getVeterinarias();
    } 
    catch (error) 
    {
      
    }
  }
}
