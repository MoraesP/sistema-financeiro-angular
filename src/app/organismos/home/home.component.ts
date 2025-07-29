import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotaoPadraoComponent } from '../../atomos/botao-padrao/botao-padrao.component';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../services/user.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotaoPadraoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private homeService = inject(HomeService);
  private authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  registrarTeste() {
    this.homeService.registrar({ username: 'Pedro', email: 'pedro1111@gmail.com', password: '123456' }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  loginTeste() {
    const req = { email: 'pedro1111@gmail.com', password: '123456' };
    this.homeService.login(req).subscribe({
      next: (res) => {
        if (res?.result?.token) {
          this.validarUsuarioExistente(req.email, res.result.token);
        }
      },
    });
  }

  private validarUsuarioExistente(email: string, token: string) {
    this.homeService.buscarUsuarios().subscribe({
      next: (res) => {
        const user = res?.result?.find((user) => user.email === email);
        if (user) {
          this.authService.setInfo(token, user);
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }
}
