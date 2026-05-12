import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-login',
  imports: [FormField, RouterLink],
  templateUrl: './login.html',
})

export class Login {
  private readonly httpService = inject(HttpService);
  private readonly router = inject(Router);

  public loginModel = signal({
    username: '',
    password: ''
  });

  public loginForm = form(this.loginModel, (path) => {
    required(path.username, { message: 'Usuario requerido' }),
    required(path.password, { message: 'Contraseña requerida '})
  });

  public async submitLogin(event: SubmitEvent)
  {
    event.preventDefault();
    const model = this.loginModel();
    const { response, success} = await this.httpService.Post<{ message: string, token: string }>('user/login', model);
    if (success === false) {
      alert(response.message);
      return;
    }

    this.router.navigate(['/home']);
  }

}
