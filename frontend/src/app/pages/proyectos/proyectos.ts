import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Projects } from '../../services/projects';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos implements OnInit {

  public data = inject(Projects);
  public cdr = inject(ChangeDetectorRef);

  public projects: any[] = [];
  selectedProject: any = null;

  ngOnInit(): void {
    this.loadProjects();
  }

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }

  public loadProjects(): void {
    this.data.getData().subscribe((response) => {
      console.log('Respuesta:', response);
      this.projects = response.map(project => ({
        name: project.title,
        description: project.description,
        image: 'https://proyectointermodular-production-0233.up.railway.app/uploads/' + project.image,
        year: project.year.toString(),
        location: project.location
      }));
      this.cdr.markForCheck();
    });
  }
}
