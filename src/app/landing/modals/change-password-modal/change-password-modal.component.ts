import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';


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
  });

  constructor(public dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  submit(){}
  
  close() {
    this.dialogRef.close();
  }

}
