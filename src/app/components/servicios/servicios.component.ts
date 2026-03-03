import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
  {
    titulo: 'Obediencia básica',
    descripcion: 'Ideal para cachorros sin entrenamiento. Comandos como sentarse, quedarse quieto, acudir al llamado.',
    imagen: '/images/noahObediencia.jpg'
  },
  {
    titulo: 'Adiestramiento avanzado',
    descripcion: 'Entrenamiento sin correa, habilidades especiales y refuerzo de conducta.',
    imagen: '/images/avanzando.jpeg'
  },
  {
    titulo: 'Socialización canina',
    descripcion: 'Ideal para perros tímidos o reactivos. Actividades grupales seguras.',
    imagen: '/images/socializacion.jpg'
  }

];

}
