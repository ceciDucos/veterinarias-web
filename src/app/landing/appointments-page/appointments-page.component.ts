import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { MessageService } from 'src/app/message-handler/message.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ClientService } from 'src/app/services/client.service';

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
  public searchQuery$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public searchQuery: string;
  public appointments = [];

  constructor(
    private appointmentService: AppointmentService,
    private messageService: MessageService,
    private clientService: ClientService) {
  }

  async ngOnInit() {
    const cedula = this.clientService.currentCIValue;
    const appointments = await this.appointmentService.getAppointments(cedula);
    this.appointments = appointments;
    this.sourceData.data = appointments;
    this.sourceData.paginator = this.paginator;
    this.sourceData.sort = this.sort;

    const typeahead = this.searchQuery$.asObservable().pipe(
      debounceTime(500),
      distinctUntilChanged()
    );

    // just skipping null values because we want to detect the empty string
    typeahead.pipe(skipWhile(q => q === null)).subscribe(query => this.filterAppointments(query));
  }

  async changeRating(consulta) {
    try {
      await this.appointmentService.changeAppointmentRating(consulta);
      this.messageService.showSuccess('Consulta calificada exitosamente.');
    } catch (error) {
      this.messageService.showError(error);
    }
  }

  async filterAppointments(query: string) {
    if (query && query.length >= 2) {
      const aux = query.toLowerCase();
      this.sourceData.data = this.appointments.filter(consulta => {
        return (consulta.Mascota && consulta.Mascota.Nombre && consulta.Mascota.Nombre.toLowerCase().includes(aux));
      });
    } else {
      this.sourceData.data = this.appointments;
    }
  }
}
