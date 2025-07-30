import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { BuscarContaDoUsuarioUseCase } from '../../domain/usecases/buscar-conta-do-usuario.usecase';
import { CartoesComponent } from '../../moleculas/cartoes/cartoes.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CartoesComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private buscarContasUseCase = inject(BuscarContaDoUsuarioUseCase);

  ngOnInit(): void {
    this.buscarContasUseCase.execute().subscribe({
      next: (res) => {
        this.userService.contaUsuario.set(res);
      },
      error: () => {
        this.authService.removeToken();
        this.router.navigate(['/']);
      },
    });
  }
}
