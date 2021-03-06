import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChangePasswordModalComponent } from '../modals/change-password-modal/change-password-modal.component';
import { UserEditModalComponent } from '../modals/edit-user-modal/edit-user-modal.component';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/message-handler/message.service';
import { MascotaUtil } from './mascota.util';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-page',
  templateUrl: 'profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent {
  public columns = ['Nombre', 'Raza', 'Edad', 'VacunaAlDia', 'Foto'];
  public sourceData = new MatTableDataSource<any>();
  public client: any;

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private messageService: MessageService,
    private domSanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
  ) {
  }

  async ngOnInit() {
    try {
      this.client = await this.clientService.getClient();
      //this.sourceData.data = this.client.Mascotas;
      this.sourceData.data = this.client.Mascotas.map(mascota => {
        return { ...mascota, Foto: this.getFoto(mascota.CarnetInscripcion.Foto) };
      });
    }
    catch (error) {
      this.messageService.showError(error);
    }
  }

  openModalEdit() {
    try {
      const dialogRef = this.dialog.open(UserEditModalComponent, {
        autoFocus: false,
        data: { client: this.client }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(result);
          this.client = result;
        }
      });
    }
    catch (error) {
      this.messageService.showError(error);
    }
  }

  openModalPassword() {
    try {
      const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
        autoFocus: false,
        data: { client: this.client }
      });
      dialogRef.afterClosed().subscribe(result => {
        //
      });
    }
    catch (error) {
      this.messageService.showError(error);
    }
  }

  getRaza(raza: number) {
    return MascotaUtil.getRazaMascota(raza);
  }

  getVacunas(vacunas: boolean) {
    return MascotaUtil.getVacunasAlDia(vacunas);
  }

  getFoto(foto: any) {
    return this.domSanitizer.bypassSecurityTrustUrl(foto);
  }
}
