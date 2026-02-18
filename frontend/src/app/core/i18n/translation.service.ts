import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'es' | 'en' | 'ru' | 'pl';

export interface LangOption {
  code: Lang;
  flag: string;
  label: string;
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
  /** Available languages */
  readonly languages: LangOption[] = [
    { code: 'es', flag: 'https://flagcdn.com/w40/es.png', label: 'Español' },
    { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', label: 'English' },
    { code: 'ru', flag: 'https://flagcdn.com/w40/ru.png', label: 'Русский' },
    { code: 'pl', flag: 'https://flagcdn.com/w40/pl.png', label: 'Polski' },
  ];

  /** Current language */
  readonly currentLang = signal<Lang>(this.getInitialLang());

  /** Current translation dictionary */
  readonly translations = signal<Record<string, string>>({});

  /** Loading state */
  readonly loading = signal(false);

  constructor() {
    // React to language changes
    effect(() => {
      const lang = this.currentLang();
      this.loadTranslations(lang);
    });
  }

  /** Translate a key, returns the key itself if not found */
  t(key: string): string {
    return this.translations()[key] ?? key;
  }

  /** Switch language */
  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    localStorage.setItem('app-lang', lang);
    document.documentElement.lang = lang;
  }

  /** Get the current LangOption */
  get currentLangOption(): LangOption {
    return this.languages.find(l => l.code === this.currentLang())!;
  }

  private getInitialLang(): Lang {
    const stored = localStorage.getItem('app-lang') as Lang | null;
    if (stored && this.isValidLang(stored)) return stored;

    // Try browser language
    const browserLang = navigator.language.split('-')[0] as Lang;
    if (this.isValidLang(browserLang)) return browserLang;

    return 'es';
  }

  private isValidLang(lang: string): lang is Lang {
    return ['es', 'en', 'ru', 'pl'].includes(lang);
  }

  private async loadTranslations(lang: Lang): Promise<void> {
    this.loading.set(true);
    try {
      const response = await fetch(`/i18n/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
      const data = await response.json();
      this.translations.set(data);
    } catch (error) {
      console.error('Translation load error:', error);
      // Fallback to Spanish if translation file fails
      if (lang !== 'es') {
        const fallback = await fetch('/i18n/es.json');
        if (fallback.ok) {
          this.translations.set(await fallback.json());
        }
      }
    } finally {
      this.loading.set(false);
    }
  }
}
