import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    router = inject(Router)
    goToSignUp() {
        this.router.navigate(['/'])
    }

    loginForm = new FormGroup({
        fullname: new FormControl('', {
            validators: [Validators.required]
        }),
        password: new FormControl('', {
            validators: [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]
        })
    })
}
