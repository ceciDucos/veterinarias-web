import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/message-handler/message.service';
import { ClientService } from 'src/app/services/client.service';


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
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit() {
    this.editUserForm.controls.cedula.setValue(this.data.client.Cedula);
    this.editUserForm.controls.nombre.setValue(this.data.client.Nombre);
    this.editUserForm.controls.direccion.setValue(this.data.client.Direccion);
    this.editUserForm.controls.telefono.setValue(this.data.client.Telefono);
    this.editUserForm.controls.correo.setValue(this.data.client.Correo);
  }

  async submit() {

    this.submitted = true;
    if (this.editUserForm.invalid) {
      return;
    }

    try {
      if (!this.saving) {
        this.saving = true;
        const user = {      
          Nombre: this.editUserForm.controls.nombre.value,    
          Cedula: this.editUserForm.controls.cedula.value,
          Telefono: this.editUserForm.controls.telefono.value,
          IdVeterinaria: this.data.client.idVeterinaria,
          Direccion: this.editUserForm.controls.direccion.value,
          Correo: this.editUserForm.controls.correo.value,
          Activo: this.data.client.Activo,
        }
        await this.clientService.editClient(user);
        this.messageService.showSuccess("Usuario editado correctamente", 3000);
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
