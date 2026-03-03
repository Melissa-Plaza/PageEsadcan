import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'] // opcional si usas estilos
})
export class ContactoComponent {
  @ViewChild('nombreRef') nombreRef!: ElementRef;
  @ViewChild('correoRef') correoRef!: ElementRef;
  @ViewChild('servicioRef') servicioRef!: ElementRef;
  @ViewChild('mensajeRef') mensajeRef!: ElementRef;
  @ViewChild('nombreMascotaRef') nombreMascotaRef!: ElementRef;
  @ViewChild('edadMascotaRef') edadMascotaRef!: ElementRef;

  enviarFormulario(event: Event) {
    event.preventDefault();

    // Construimos el objeto con los datos del formulario
    const contacto = {
      nombre: this.nombreRef.nativeElement.value,
      correo: this.correoRef.nativeElement.value,
      servicio: this.servicioRef.nativeElement.value,
      mensaje: this.mensajeRef.nativeElement.value,
      nombreMascota: this.nombreMascotaRef.nativeElement.value,
      edadMascota: this.edadMascotaRef.nativeElement.value
    };

    // Enviar con EmailJS
    emailjs.send(
      'service_agrf7ao',   // 👈 reemplaza con tu SERVICE_ID
      'template_ea7x3o9',  // 👈 reemplaza con tu TEMPLATE_ID
      contacto,          // 👈 objeto con los datos a enviar
      'vMQwlQ7vb5T6YTyOn'    // 👈 reemplaza con tu PUBLIC_KEY
    ).then(
      (result: EmailJSResponseStatus) => {
        console.log('✅ Correo enviado:', result.text);
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        this.limpiarFormulario();
      },
      (error) => {
        console.error('❌ Error al enviar:', error.text);
        alert('Ocurrió un error al enviar tu mensaje.');
      }
    );
  }

  // Método opcional para limpiar los campos después de enviar
  private limpiarFormulario() {
    this.nombreRef.nativeElement.value = '';
    this.correoRef.nativeElement.value = '';
    this.servicioRef.nativeElement.value = '';
    this.mensajeRef.nativeElement.value = '';
    this.nombreMascotaRef.nativeElement.value = '';
    this.edadMascotaRef.nativeElement.value = '';
  }
}
