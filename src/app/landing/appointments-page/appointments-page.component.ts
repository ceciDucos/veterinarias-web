import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appointments-page',
  templateUrl: 'appointments-page.component.html',
  styleUrls: ['appointments-page.component.scss']
})

export class AppointmentsPageComponent implements OnInit {
  public tableColumns = ['nombreMascota', 'fecha', 'descripcion', 'calificacion'];
  public sourceData = new MatTableDataSource<any>();
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.sourceData.data = [
      { nombreMascota: 'Lali', fecha: "12/10/2021", descripcion: 'corte de pelo y uñas.', calificacion: 4 },
      { nombreMascota: 'Luna', fecha: "12/10/2021", descripcion: 'corte de pelo y uñas.', calificacion: 4 },
      { nombreMascota: 'Sultan', fecha: "12/10/2021", descripcion: 'corte de pelo y uñas.', calificacion: 4 }
    ]
  }

  ngOnInit() {
    this.sourceData.paginator = this.paginator;
    this.sourceData.sort = this.sort;
  }
}
