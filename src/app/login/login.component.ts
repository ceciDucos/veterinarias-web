import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { VeterinariaService } from '../services/veterinaria.service';
import { passwordValidator } from './password-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
  public currentStep = 'login';
  public loading = false;
  public loginSubmitted = false;
  public registerSubmitted = false;
  public loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  public registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    userPassword: ['', Validators.required],
    userConfirmPassword: ['', Validators.required],
  }, {
    validators: [
      passwordValidator('userPassword', 'userConfirmPassword')
    ]
  });

  constructor(private veterinariaService: VeterinariaService,
    private formBuilder: FormBuilder) {
    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/landing']);
    // }
  }

  async ngOnInit() {
    // try {
    //   const response = await this.veterinariaService.getVeterinarias();
    //   console.log(response);
    //   const veterinaria = await this.veterinariaService.getVeterinaria(1);
    //   console.log(veterinaria);
    // } catch (error) {
    //   console.log(error);
    // }
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
    this[`${name}Submitted`] = true;
    if (this[`${name}Form`].invalid) {
      return;
    }
    console.log(this[`${name}Form`].value);
  }
}
