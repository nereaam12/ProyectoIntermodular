import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  protected readonly filterText = signal('');

  onFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterText.set(input.value);
  }
}
