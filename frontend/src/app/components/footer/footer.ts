import { Component, signal } from '@angular/core';

interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = signal(new Date().getFullYear());

  protected readonly socialLinks = signal<SocialLink[]>([
    { icon: 'bi-instagram', label: 'Instagram', url: '#' },
    { icon: 'bi-tiktok', label: 'TikTok', url: '#' },
    { icon: 'bi-facebook', label: 'Facebook', url: '#' },
  ]);
}
