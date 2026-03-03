import { Component, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  isDropdownOpen = false;

  // control de visibilidad por scroll
  lastScrollTop = 0;
  isNavbarVisible = true;

  esInicio: boolean = true;
  private routerSub?: Subscription;

  constructor(private router: Router) {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica si estás en la ruta de inicio
        this.esInicio = event.urlAfterRedirects === '/';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    // pequeño umbral para evitar parpadeos
    if (currentScroll > this.lastScrollTop + 5) {
      // desplazamiento hacia abajo -> ocultar navbar
      this.isNavbarVisible = false;
    } else if (currentScroll < this.lastScrollTop - 5) {
      // desplazamiento hacia arriba -> mostrar navbar
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = Math.max(0, currentScroll);
  }

  toggleDropdown(event: Event) {
    event.preventDefault();

    // Solo togglear en pantallas pequeñas
    if (window.innerWidth < 992) {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  handleMouseEnter() {
    if (window.innerWidth >= 992) {
      this.isDropdownOpen = true;
    }
  }

  handleMouseLeave() {
    if (window.innerWidth >= 992) {
      this.isDropdownOpen = false;
    }
  }
  closeDropdown() {
    this.isDropdownOpen = false;
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
