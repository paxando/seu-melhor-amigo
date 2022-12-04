import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, senha } = this.loginForm.value;
    this.authService
      .login(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Logado com sucesso.',
          loading: 'Logando...',
          error: ' Usuário não existe!',
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }
}
