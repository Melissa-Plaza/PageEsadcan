import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes = [
    '/images/G1.JPG',
    '/images/G2.JPG',
    '/images/G21.jpg',
    '/images/G3.JPG',
    '/images/G5.JPG',
    '/images/G6.JPG',
    '/images/RO.JPG',
    '/images/G9.JPG',
    '/images/G11.JPG',
    'images/G7.JPG',
    '/images/G12.jpg',
    '/images/G13.jpg',
    '/images/G14.jpg',
    '/images/G23.JPG',
    '/images/G15.jpg',
    '/images/DSC00455.jpg',
    '/images/G18.jpg',
    '/images/G19.jpg',
    'images/G20.jpg',
    'images/taller.JPG',
    'images/cc.JPEG',
    '/images/COON.JPG',
    'images/EXPO.JPG',
    'images/UU.jpg'
]
  }

