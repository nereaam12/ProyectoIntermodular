import { Component, signal, inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { TranslationService, TranslatePipe, type Lang } from '../../core/i18n';

interface NavItem {
  labelKey: string;
  route: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly i18n = inject(TranslationService);

  protected readonly menuOpen = signal(false);
  protected readonly langDropdownOpen = signal(false);

  protected readonly navItems = signal<NavItem[]>([
    { labelKey: 'nav.inicio', route: '/' },
    { labelKey: 'nav.proyectos', route: '/proyectos' },
    { labelKey: 'nav.estudio', route: '/estudio' },
    { labelKey: 'nav.noticias', route: '/novedades' },
    { labelKey: 'nav.contacto', route: '/contacto' },
  ]);

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLangDropdown(event: Event): void {
    event.stopPropagation();
    this.langDropdownOpen.update(v => !v);
  }

  selectLang(lang: Lang): void {
    this.i18n.setLang(lang);
    this.langDropdownOpen.set(false);
  }

  closeLangDropdown(): void {
    this.langDropdownOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.langDropdownOpen.set(false);
  }
}
