import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChangePasswordModalComponent } from '../modals/change-password-modal/change-password-modal.component';
import { UserEditModalComponent } from '../modals/edit-user-modal/edit-user-modal.component';
import { ClientService } from 'src/app/services/client.service';
import { MessageService } from 'src/app/message-handler/message.service';

@Component({
    selector: 'app-profile-page',
    templateUrl: 'profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
  })
  
export class ProfilePageComponent {
    public tableColumns = ['nombreMascota', 'razaMascota', 'edadMascota', 'vacunasMascota'];
    public sourceData = new MatTableDataSource<any>();
    public pageSizeOptions: number[] = [5, 10, 25, 100];
    public pageEvent: PageEvent;
    public client: any;
    private messageService: MessageService;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
      private clientService: ClientService,
      public dialog: MatDialog,
      private formBuilder: FormBuilder,
      ) {
      this.sourceData.data = [
        { nombreMascota: 'ElPerroSinNombre', razaMascota: 'Caniche', edadMascota: '1', vacunasMascota: 'Si' },
        { nombreMascota: 'Poncho', razaMascota: 'Policia', edadMascota: '2', vacunasMascota: 'Si' },
        { nombreMascota: 'Felix', razaMascota: 'Otro', edadMascota: '3', vacunasMascota: 'Si' },
      ]
    }
  
    async ngOnInit() {
      const cedula = this.clientService.currentCIValue;
      try 
      {
        this.client = await this.clientService.getClient(cedula);
      } 
      catch (error) 
      {
        this.messageService.showError(error);
      }
    }

    openModalEdit() {
      try{
        const dialogRef = this.dialog.open(UserEditModalComponent, {
          autoFocus: false,
          data:{user:""}
        });
        dialogRef.afterClosed().subscribe(result => {
          //
        });
      }
      catch(error){
        this.messageService.showError(error);
      }
    }

    openModalPassword() {
      try{
        const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
          autoFocus: false,
          data:{user:""}
        });
        dialogRef.afterClosed().subscribe(result => {
          //
        });
      }
      catch(error){
        console.log(error);
      }
    }
  }

