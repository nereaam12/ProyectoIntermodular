import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {

  selectedProject: any = null;

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }

}
