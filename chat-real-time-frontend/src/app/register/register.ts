import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.html',
})

export class Register {
  private readonly httpService = inject(HttpService);
  private readonly router = inject(Router);

  public async submitLogin(event: SubmitEvent) {
    event.preventDefault();
  }

}
