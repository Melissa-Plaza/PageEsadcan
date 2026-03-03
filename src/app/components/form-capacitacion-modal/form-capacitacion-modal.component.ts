import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-form-capacitacion-modal',
  standalone: true,
  templateUrl: './form-capacitacion-modal.component.html',
  styleUrls: ['./form-capacitacion-modal.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class FormCapacitacionModal {
  nombre = '';
  correo = '';

  constructor(public dialogRef: MatDialogRef<FormCapacitacionModal>) {}

  cerrar() {
    this.dialogRef.close();
  }

  enviarFormulario() {
    const inscripcion = {
      nombre: this.nombre,
      correo: this.correo
    };

    // 👉 Usa tus credenciales reales de EmailJS
    emailjs.send(
      'service_agrf7ao',   // service_xxxxx
      'template_w0wlwsv',  // template_xxxxx
      inscripcion,
      'vMQwlQ7vb5T6YTyOn'    // public_xxxxx
    ).then((result: EmailJSResponseStatus) => {
      console.log('✅ Inscripción enviada:', result.text);
      alert('¡Gracias por inscribirte! Nos pondremos en contacto pronto.');
      this.cerrar();
    }, (error) => {
      console.error('❌ Error al enviar inscripción:', error.text);
      alert('Ocurrió un error al procesar tu inscripción.');
    });
  }
}
