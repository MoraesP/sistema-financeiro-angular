import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.dashboardService.buscarContaDoUsuario().subscribe({
      next: (res) => {
        console.log(res);
        this.userService.contaUsuario.set(res);
      },
    });
  }
}
