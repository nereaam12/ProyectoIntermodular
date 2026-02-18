import { Component, signal, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface Proyecto {
  img: string;
  nameKey: string;
  metaKey: string;
}

interface Novedad {
  img: string;
  kickerKey: string;
  titleKey: string;
  textKey: string;
}

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit, OnDestroy {
  protected readonly i18n = inject(TranslationService);

  // Carousel hero
  protected readonly heroImages = signal([
    'img/proyectos/1.png',
    'img/proyectos/2.png',
    'img/proyectos/3.png',
    'img/proyectos/5.png',
  ]);
  protected readonly currentIndex = signal(0);
  protected readonly currentHeroImage = computed(
    () => this.heroImages()[this.currentIndex()]
  );

  private intervalId: ReturnType<typeof setInterval> | null = null;

  // Proyectos destacados
  protected readonly proyectos = signal<Proyecto[]>([
    { img: 'img/proyectos/1.png', nameKey: 'inicio.proyecto1.name', metaKey: 'inicio.proyecto1.meta' },
    { img: 'img/proyectos/2.png', nameKey: 'inicio.proyecto2.name', metaKey: 'inicio.proyecto2.meta' },
    { img: 'img/proyectos/3.png', nameKey: 'inicio.proyecto3.name', metaKey: 'inicio.proyecto3.meta' },
  ]);

  // Novedades
  protected readonly novedades = signal<Novedad[]>([
    {
      img: 'img/proyectos/1.png',
      kickerKey: 'inicio.novedad1.kicker',
      titleKey: 'inicio.novedad1.title',
      textKey: 'inicio.novedad1.text',
    },
    {
      img: 'img/proyectos/2.png',
      kickerKey: 'inicio.novedad2.kicker',
      titleKey: 'inicio.novedad2.title',
      textKey: 'inicio.novedad2.text',
    },
    {
      img: 'img/proyectos/3.png',
      kickerKey: 'inicio.novedad3.kicker',
      titleKey: 'inicio.novedad3.title',
      textKey: 'inicio.novedad3.text',
    },
  ]);

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex.update(
        i => (i + 1) % this.heroImages().length
      );
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
