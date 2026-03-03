import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; //

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenes = [
    '/images/Capacitacion.jpg',
    '/images/jp.jpg',
    '/images/clientes.jpeg'
  ];
  imagenActual = 0;

  nombreTutor: string = '';
  nombrePerro: string = '';
  edadPerro: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
    }, 3500);
  }

  enviarWhatsApp() {
    const numero = '593963699186';
    const mensaje = `Hola, soy ${this.nombreTutor}. Quiero agendar una evaluación gratuita para mi perrito ${this.nombrePerro}, que tiene ${this.edadPerro} años.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

 irCapacitacion() {
    this.router.navigateByUrl('/capacitacion');
  }
}
