import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: 'edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})

export class UserEditModalComponent {
  
  public submitted = false;
  public saving = false;
  public editUserForm = this.formBuilder.group({
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', Validators.required],
  });

  constructor(public dialogRef: MatDialogRef<UserEditModalComponent>,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit() {
    //this.editUserForm.controls.nombre.setValue(this.data.)
  }

  submit() {

    this.submitted = true;
    if (this.editUserForm.invalid) {
      return;
    }

    try {
      if (!this.saving) {
        this.saving = true;
        //
      } 
    } 
    catch (error) {
      this.messageService.showError(error, 3000);
      /*if (error.status === 401) {
        this.dialogRef.close(false);
      }*/
    } 
    finally {
      this.saving = false;
    }
  }
  
  close() {
    this.dialogRef.close();
  }

}
