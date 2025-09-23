import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importamos los componentes que queremos usar
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component'; // <-- ¡IMPORTANTE!

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Añadimos los componentes a la lista de 'imports' para que estén disponibles
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent // <-- ¡IMPORTANTE!
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exofera3.0_Angular';
}

