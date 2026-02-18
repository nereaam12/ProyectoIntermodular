import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  protected readonly i18n = inject(TranslationService);

  protected readonly formData = signal<ContactForm>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);

  protected readonly isFormValid = computed(() => {
    const data = this.formData();
    return data.nombre.trim() !== '' && data.email.trim() !== '' && data.mensaje.trim() !== '';
  });

  updateField(field: keyof ContactForm, event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.formData.update(current => ({ ...current, [field]: value }));
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    if (!this.isFormValid()) return;

    this.isSubmitting.set(true);

    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));

    this.submitted.set(true);
    this.isSubmitting.set(false);

    // Reset despues de 3 segundos
    setTimeout(() => {
      this.submitted.set(false);
      this.formData.set({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 3000);
  }
}
