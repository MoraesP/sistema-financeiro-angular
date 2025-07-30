import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './organismos/home/home.component';
import { PaginaInvalidaComponent } from './organismos/pagina-invalida/pagina-invalida.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./organismos/dashboard/dashboard.routes').then((r) => r.routes),
    canActivate: [authGuard],
    data: { title: 'Dashboard' },
  },
  {
    path: '404',
    component: PaginaInvalidaComponent,
    data: { title: 'Página inexistente' },
  },
  { path: '**', redirectTo: '/404' },
];
