import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';
import { ClientService } from 'src/app/services/client.service';
import { passwordValidator } from 'src/app/login/password-match.validator';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: 'change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})

export class ChangePasswordModalComponent {
  public submitted = false;
  public saving = false;
  public passwordForm = this.formBuilder.group({
    passwordActual: ['', Validators.required],
    passwordNueva: ['', Validators.required],
    repetirPassword: ['', Validators.required]
  }, {
    validators: [
      passwordValidator('passwordNueva', 'repetirPassword')
    ]
  });

  constructor(public dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {

  }

  async submit() {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }

    try {
      if (!this.saving) {
        this.saving = true;
        const user = {
          CurrentPassword: this.passwordForm.controls.passwordActual.value,
          NewPassword: this.passwordForm.controls.passwordNueva.value,
        }
        await this.clientService.editPassword(user);
        this.messageService.showSuccess("La contraseña se actualizó correctamente.", 3000);
        this.dialogRef.close(user);
      }
    }
    catch (error) {
      this.messageService.showError(error, 3000);
      if (error.status === 401) {
        this.dialogRef.close(false);
      }
    }
    finally {
      this.saving = false;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
