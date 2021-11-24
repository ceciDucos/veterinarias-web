import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VeterinariaService } from 'src/app/services/veterinaria.service';
import { passwordValidator } from '../password-match.validator';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['./../login.component.scss']
})

export class UserFormComponent implements OnInit {
  @Output() registerEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeStepEmit: EventEmitter<any> = new EventEmitter<any>();

  public veterinarias = [];
  public submitted = false;
  public registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    cedula: ['', Validators.required],
    telefono: ['', Validators.required],
    veterinaria: ['', Validators.required],
    direccion: ['', Validators.required],
    correo: ['', Validators.required],
    userPassword: ['', Validators.required],
    userConfirmPassword: ['', Validators.required]
  }, {
    validators: [
      passwordValidator('userPassword', 'userConfirmPassword')
    ]
  });

  constructor(private formBuilder: FormBuilder,
    private veterinariaService: VeterinariaService) { }

  async ngOnInit() {
    try {
      this.veterinarias = await this.veterinariaService.getVeterinarias();
    } catch (error) {
      console.log(error);
    }
  }

  submit() {
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    const clientRequest = {
      nombre: this.registerForm.get('userName').value,
      cedula: this.registerForm.get('cedula').value,
      telefono: this.registerForm.get('telefono').value,
      idVeterinaria: this.registerForm.get('veterinaria').value,
      direccion: this.registerForm.get('direccion').value,
      correo: this.registerForm.get('correo').value,
      pass: this.registerForm.get('userPassword').value,
    }
    this.registerEvent.emit(clientRequest);
  }

  cancel() {
    this.changeStepEmit.emit(true);
  }
}
