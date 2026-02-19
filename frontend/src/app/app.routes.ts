import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Proyectos } from './pages/proyectos/proyectos';
import { Estudio } from './pages/estudio/estudio';
import { Novedades } from './pages/novedades/novedades';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio},
  { path: 'proyectos', component: Proyectos, },
  { path: 'estudio', component: Estudio, },
  { path: 'novedades', component: Novedades, },
  { path: 'contacto', component: Contacto, },
  { path: 'login', component: Login, },
  { path: '**', redirectTo: 'inicio' },
];
