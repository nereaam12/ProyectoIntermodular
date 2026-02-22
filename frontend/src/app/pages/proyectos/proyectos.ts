import { Component, inject  } from '@angular/core';

import { Projects } from '../../services/projects';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos  {

  public data = inject(Projects);

  public projects: any[] = [];
  selectedProject: any = null;


  // Se ejecuta automáticamente al cargar la página

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }

  public loadProjects(): void {
    this.data.getData().subscribe((response) => {
      this.projects = response.map(project => ({
        name: project.title,
        description: project.description,
        image: 'http://localhost:8000/uploads/' + project.image, // <-- URL completa
        year: project.year.toString(),
        location: project.location
      }));
    });
  }
}
