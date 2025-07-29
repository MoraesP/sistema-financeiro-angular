import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../services/user.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.dashboardService.buscarContaDoUsuario().subscribe({
      next: (res) => {
        console.log(res);
        this.userService.contaUsuario.set(res);
      },
      error: () => {
        this.authService.removeToken();
        this.router.navigate(['/']);
      },
    });
  }
}
