import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './organismos/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/organismos/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
    data: { title: 'Dashboard' },
  },
  { path: '**', redirectTo: '/404' },
];
