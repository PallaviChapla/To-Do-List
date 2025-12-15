import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
