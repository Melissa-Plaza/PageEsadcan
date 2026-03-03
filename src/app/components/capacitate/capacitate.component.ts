import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormCapacitacionModal } from '../form-capacitacion-modal/form-capacitacion-modal.component';

@Component({
  selector: 'app-capacitate',
  standalone: true,
  templateUrl: './capacitate.component.html',
  styleUrls: ['./capacitate.component.css'],
  imports: [
    MatButtonModule,
  ]
})
export class CapacitateComponent {
  constructor(private dialog: MatDialog) {}

  abrirModalInscripcion() {
    this.dialog.open(FormCapacitacionModal, {
      width: '500px',
      disableClose: true,
    });
  }

}
