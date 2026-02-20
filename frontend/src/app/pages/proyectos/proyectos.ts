import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.scss']
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
