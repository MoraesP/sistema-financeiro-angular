import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { BuscarContaDoUsuarioUseCase } from '../../domain/usecases/buscar-conta-do-usuario.usecase';
import { AccountTotal } from '../../models/account';
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
  public conta$!: Observable<AccountTotal>;

  private router = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private buscarContasUseCase = inject(BuscarContaDoUsuarioUseCase);

  ngOnInit(): void {
    this.conta$ = this.buscarContasUseCase.execute().pipe(
      tap((conta) => this.userService.contaUsuario.set(conta)),
      catchError(() => {
        this.authService.removeToken();
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
