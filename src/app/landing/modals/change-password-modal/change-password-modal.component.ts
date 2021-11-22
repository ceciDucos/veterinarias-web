import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';


@Component({
  selector: 'app-change-password-modal',
  templateUrl: 'change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})

export class ChangePasswordModalComponent {
  public submitted = false;
  public saving = false;

  constructor(public dialogRef: MatDialogRef<ChangePasswordModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

}
