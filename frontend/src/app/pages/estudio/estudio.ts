import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService, TranslatePipe } from '../../core/i18n';

interface TrajectoryItem {
  titleKey: string;
  descriptionKey: string;
  locationKey: string;
}

@Component({
  selector: 'app-estudio',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './estudio.html',
  styleUrl: './estudio.scss',
})
export class Estudio {
  protected readonly i18n = inject(TranslationService);

  protected readonly trajectoryItems = signal<TrajectoryItem[]>([
    { titleKey: 'estudio.traj1.title', descriptionKey: 'estudio.traj1.desc', locationKey: 'estudio.traj1.loc' },
    { titleKey: 'estudio.traj2.title', descriptionKey: 'estudio.traj2.desc', locationKey: 'estudio.traj2.loc' },
    { titleKey: 'estudio.traj3.title', descriptionKey: 'estudio.traj3.desc', locationKey: 'estudio.traj3.loc' },
    { titleKey: 'estudio.traj4.title', descriptionKey: 'estudio.traj4.desc', locationKey: 'estudio.traj4.loc' },
    { titleKey: 'estudio.traj5.title', descriptionKey: 'estudio.traj5.desc', locationKey: 'estudio.traj5.loc' },
    { titleKey: 'estudio.traj6.title', descriptionKey: 'estudio.traj6.desc', locationKey: 'estudio.traj6.loc' },
    { titleKey: 'estudio.traj7.title', descriptionKey: 'estudio.traj7.desc', locationKey: 'estudio.traj7.loc' },
    { titleKey: 'estudio.traj8.title', descriptionKey: 'estudio.traj8.desc', locationKey: 'estudio.traj8.loc' },
    { titleKey: 'estudio.traj9.title', descriptionKey: 'estudio.traj9.desc', locationKey: 'estudio.traj9.loc' },
  ]);
}
