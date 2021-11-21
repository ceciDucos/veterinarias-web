import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from '../message-handler/message.service';
import { ClientService } from '../services/client.service';
import { VeterinariaService } from '../services/veterinaria.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  public currentStep = 'login';
  public loading = false;
  public loginSubmitted = false;
  public loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private veterinariaService: VeterinariaService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private messageService: MessageService) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/landing']);
    // }
  }

  async ngOnInit() {
    try {
      const response = await this.veterinariaService.getVeterinarias();
      console.log(response);
      // const veterinaria = await this.veterinariaService.getVeterinaria(1);
      // console.log(veterinaria);
    } catch (error) {
      console.log(error);
    }
  }

  changeStep() {
    this.currentStep = this.currentStep === 'login' ? 'register' : 'login';
  }

  isDisabled(): boolean {
    const formName = this.currentStep === 'login' ? 'login' : 'register';
    return this[`${formName}Form`].invalid && this[`${formName}Submitted`];
  }

  submit() {
    const name = this.currentStep === 'login' ? 'login' : 'register';
    this.loginSubmitted = true;

    if (this[`${name}Form`].invalid) {
      return;
    }
  }

  async registerUser(event) {
    console.log('lo que viene del register');
    console.log(event);
    try {
      await this.clientService.addUser(event);
    } catch (error) {
      this.messageService.showError(error);
    }
  }
}
