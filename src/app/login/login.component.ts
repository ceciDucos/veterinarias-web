import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public saving = false;
  public loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,) {

    //si esta loggeado redirecciona al
    if (this.clientService.currentUserValue) {
      this.router.navigate(['/landing']);
    }
  }

  async ngOnInit() { }

  changeStep() {
    this.currentStep = this.currentStep === 'login' ? 'register' : 'login';
  }

  submit() {
    const name = this.currentStep === 'login' ? 'login' : 'register';
    this.loginSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.clientService.login(this.loginForm.get('name').value,
      this.loginForm.get('password').value)
      .subscribe(
        data => {
          this.router.navigate(['/landing']);
        },
        error => {
          this.loading = false;
          this.messageService.showError(error, 30333);
        });
  }

  async registerUser(event) {
    if(!this.saving)
    {
      this.saving=true;
      try {
        await this.clientService.addUser(event);
        if (this.clientService.currentUserValue) {
          this.router.navigate(['/landing']);
        }
      } 
      catch (error) {
        this.messageService.showError(error);
      }
      finally {
        this.saving=false;
      }
    } 
  }
}
