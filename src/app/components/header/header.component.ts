import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para [class] y [style]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ], // Importamos CommonModule aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // --- TRADUCCIÓN DE LA LÓGICA DEL MENÚ HAMBURGUESA ---
  // Esta variable reemplaza la necesidad de buscar el 'navContent' y añadir/quitar la clase 'active'.
  isMenuOpen = false;

  // Esta función es llamada por el (click)="toggleMenu()" en tu HTML.
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // --- TRADUCCIÓN DE LA LÓGICA DE OCULTAR/MOSTRAR CON SCROLL ---
  // Estas variables reemplazan la necesidad de 'lastScrollTop' y de manipular el 'header.style.transform'.
  isHeaderHidden = false;
  private lastScrollTop = 0;

  // El decorador @HostListener es la forma "Angular" de hacer un window.addEventListener('scroll', ...).
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si el usuario baja y no está en la parte superior, ocultamos el header.
    this.isHeaderHidden = (scrollTop > this.lastScrollTop) && (scrollTop > 0);
    
    // Actualizamos la última posición de scroll.
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}