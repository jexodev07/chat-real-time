import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent() { return import('./login/login').then(c => c.Login) }
    },
    {
        path: 'register',
        loadComponent() { return import('./register/register').then(c => c.Register) }
    },
    {
        path: 'home',
        loadComponent() { return import('./home/home').then(c => c.Home) }
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
