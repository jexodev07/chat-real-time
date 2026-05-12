import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-register',
  imports: [FormField, RouterLink],
  templateUrl: './register.html',
})

export class Register {
  private readonly httpService = inject(HttpService);
  private readonly router = inject(Router);

  public registerModel = signal({
    username: '',
    password: '',
    confirmPassword: '',
  });

  public registerForm = form(this.registerModel);

  public async submitLogin(event: SubmitEvent) {
    event.preventDefault();
    const model = this.registerModel();
    
    const {response, success} = await this.httpService.Post<{ message: string}>('user/register', model);
    alert(response.message);
  }

}
