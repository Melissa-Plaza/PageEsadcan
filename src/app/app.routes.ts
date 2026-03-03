import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NgModule } from '@angular/core';
import { CapacitateComponent } from './components/capacitate/capacitate.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'capacitacion', component: CapacitateComponent },
  { path: 'acerca-de-nosotros', component: AcercaComponent },
  { path: 'contactanos', component: ContactoComponent },
  { path: 'galeria', component: GaleriaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Fuerza ir al tope en cada navegación:
      scrollPositionRestoration: 'top',
      // Permite #anclas dentro de la página:
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
