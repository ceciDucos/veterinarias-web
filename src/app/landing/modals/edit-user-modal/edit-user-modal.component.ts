import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: 'edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})

export class UserEditModalComponent {
  public submitted = false;
  public saving = false;

  constructor(public dialogRef: MatDialogRef<UserEditModalComponent>) {
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

}
