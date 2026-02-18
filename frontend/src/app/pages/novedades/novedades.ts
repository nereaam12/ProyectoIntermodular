import { Component, signal, inject } from '@angular/core';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface Novedad {
  img: string;
  titleKey: string;
  textKey: string;
  dateKey: string;
}

@Component({
  selector: 'app-novedades',
  imports: [TranslatePipe],
  templateUrl: './novedades.html',
  styleUrl: './novedades.scss',
})
export class Novedades {
  protected readonly i18n = inject(TranslationService);

  protected readonly featuredNews = signal({
    titleKey: 'novedades.featured.title',
    textKey: 'novedades.featured.text',
    img: 'img/proyectos/2.png',
  });

  protected readonly news = signal<Novedad[]>([
    {
      img: 'img/proyectos/1.png',
      titleKey: 'novedades.n1.title',
      textKey: 'novedades.n1.text',
      dateKey: 'novedades.n1.date',
    },
    {
      img: 'img/proyectos/2.png',
      titleKey: 'novedades.n2.title',
      textKey: 'novedades.n2.text',
      dateKey: 'novedades.n2.date',
    },
    {
      img: 'img/proyectos/3.png',
      titleKey: 'novedades.n3.title',
      textKey: 'novedades.n3.text',
      dateKey: 'novedades.n3.date',
    },
  ]);
}
