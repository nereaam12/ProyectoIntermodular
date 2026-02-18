import { Component, signal, inject } from '@angular/core';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface Proyecto {
  img: string;
  nameKey: string;
  metaKey: string;
}

@Component({
  selector: 'app-proyectos',
  imports: [TranslatePipe],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  protected readonly i18n = inject(TranslationService);

  protected readonly proyectos = signal<Proyecto[]>([
    { img: 'img/proyectos/1.png', nameKey: 'proyectos.p1.name', metaKey: 'proyectos.p1.meta' },
    { img: 'img/proyectos/2.png', nameKey: 'proyectos.p2.name', metaKey: 'proyectos.p2.meta' },
    { img: 'img/proyectos/3.png', nameKey: 'proyectos.p3.name', metaKey: 'proyectos.p3.meta' },
    { img: 'img/proyectos/4.png', nameKey: 'proyectos.p4.name', metaKey: 'proyectos.p4.meta' },
    { img: 'img/proyectos/5.png', nameKey: 'proyectos.p5.name', metaKey: 'proyectos.p5.meta' },
    { img: 'img/proyectos/6.png', nameKey: 'proyectos.p6.name', metaKey: 'proyectos.p6.meta' },
  ]);

  // Filtrado reactivo con signals
  protected readonly filterText = signal('');

  protected filteredProyectos() {
    const filter = this.filterText().toLowerCase();
    if (!filter) return this.proyectos();
    return this.proyectos().filter(
      p => this.i18n.t(p.nameKey).toLowerCase().includes(filter) ||
           this.i18n.t(p.metaKey).toLowerCase().includes(filter)
    );
  }

  onFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterText.set(input.value);
  }
}
