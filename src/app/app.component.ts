import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Paso 1: Importa tu HeaderComponent aquí
import { HeaderComponent } from './components/header/header.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // Paso 2: Añade HeaderComponent a la lista de imports
  imports: [
    RouterOutlet, 
    HeaderComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exofera3.0_Angular';
}
