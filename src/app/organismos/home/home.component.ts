import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
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
    this.homeService.login({ email: 'pedro1111@gmail.com', password: '123456' }).subscribe({
      next: (res) => {
        if (res?.result?.token) {
          this.authService.setToken(res.result.token);
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }
}
