import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.Inicio),
    title: 'Inicio | Ruiz de la Prada',
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos').then(m => m.Proyectos),
    title: 'Proyectos | Ruiz de la Prada',
  },
  {
    path: 'estudio',
    loadComponent: () => import('./pages/estudio/estudio').then(m => m.Estudio),
    title: 'Estudio | Ruiz de la Prada',
  },
  {
    path: 'novedades',
    loadComponent: () => import('./pages/novedades/novedades').then(m => m.Novedades),
    title: 'Novedades | Ruiz de la Prada',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.Contacto),
    title: 'Contacto | Ruiz de la Prada',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
