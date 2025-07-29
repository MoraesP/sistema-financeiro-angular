import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../../auth/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [BsModalService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private modalService = inject(BsModalService);
  private homeService = inject(HomeService);
  private authService = inject(AuthService);
  private fb = inject(UntypedFormBuilder);

  registrarDefault = {
    username: '',
    email: '',
    password: '',
  };

  loginDefault = {
    email: '',
    password: '',
  };

  formRegistrar: UntypedFormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  formLogin: UntypedFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  modalRef!: BsModalRef;

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  registrar() {
    const credentials = this.formRegistrar.getRawValue();
    this.homeService.registrar(credentials).subscribe({
      next: (res) => {
        this.modalRef?.hide();
      },
    });
  }

  login() {
    const credentials = this.formLogin.getRawValue();

    this.homeService.login(credentials).subscribe({
      next: (res) => {
        if (res?.result?.token) {
          this.validarUsuarioExistente(credentials.email, res.result.token);
        }
      },
      error: () => {
        this.fecharModal();
      },
    });
  }

  private validarUsuarioExistente(email: string, token: string) {
    this.homeService.buscarUsuarios().subscribe({
      next: (res) => {
        const user = res?.result?.find((user) => user.email === email);
        if (user) {
          this.fecharModal();
          const userFinal = { ...user, password: undefined };
          this.authService.setInfo(token, userFinal);
          this.router.navigate(['/dashboard']);
        }
      },
      error: () => {
        this.fecharModal();
      },
    });
  }

  abrirModal(template: TemplateRef<any>) {
    const config = {
      ignoreBackdropClick: true,
    };
    this.modalRef = this.modalService.show(template, config);
  }

  fecharModal() {
    this.modalRef?.hide();
    this.formLogin.reset(this.loginDefault);
    this.formRegistrar.reset(this.registrarDefault);
  }
}
