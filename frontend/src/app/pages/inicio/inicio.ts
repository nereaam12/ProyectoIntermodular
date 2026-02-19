import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit, OnDestroy {
  protected readonly heroImages = signal([
    'img/proyectos/1.png',
    'img/proyectos/2.png',
    'img/proyectos/3.png',
    'img/proyectos/5.png',
  ]);
  protected readonly currentIndex = signal(0);

  private intervalId: ReturnType<typeof setInterval> | null = null;

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
