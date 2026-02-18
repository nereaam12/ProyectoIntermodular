import { Component, signal, inject } from '@angular/core';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly i18n = inject(TranslationService);
  protected readonly year = signal(new Date().getFullYear());

  protected readonly socialLinks = signal<SocialLink[]>([
    { icon: 'bi-instagram', label: 'Instagram', url: '#' },
    { icon: 'bi-tiktok', label: 'TikTok', url: '#' },
    { icon: 'bi-facebook', label: 'Facebook', url: '#' },
  ]);
}
