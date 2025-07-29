import { Component, inject } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private homeService = inject(HomeService);

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
        console.log(res);
      },
    });
  }
}
