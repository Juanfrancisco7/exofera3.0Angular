import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var emailjs: any;

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  isSending = false;
  notification = { message: '', type: '' };

  constructor() {
    // Tu JavaScript original para inicializar EmailJS ya está aquí.
    emailjs.init("MozjG_1EF6MduDcEx");
  }

  sendEmail(form: NgForm) {
    if (form.invalid) {
      this.showNotification('Por favor, completa todos los campos requeridos.', 'error');
      return;
    }

    this.isSending = true;

    const serviceID = 'service_1fd29qg';
    const templateID = 'template_lhkn88h';

    // La lógica de envío es la misma que en tu JS.
    emailjs.send(serviceID, templateID, form.value)
      .then(() => {
        this.isSending = false;
        // ¡HEMOS INTRODUCIDO TU MENSAJE PERSONALIZADO AQUÍ!
        this.showNotification(
          'Gracias por contactar a Juan Francisco. Debido a una alta demanda de mensajes, es posible que la respuesta tome un poco más de tiempo de lo habitual. Si tu consulta es urgente, te recomendamos contactarlo por otra vía disponible.',
          'success'
        );
        form.resetForm();
      }, (err: any) => {
        this.isSending = false;
        this.showNotification('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        console.error('Error al enviar email:', err);
      });
  }

  // Esta función es la "traducción" de tu mostrarNotificacionFormulario.
  private showNotification(message: string, type: 'success' | 'error') {
    this.notification = { message, type };
    // El timeout para ocultar la notificación.
    setTimeout(() => {
      this.notification = { message: '', type: '' };
    }, 10000); // 10 segundos, como en tu JS original.
  }
}