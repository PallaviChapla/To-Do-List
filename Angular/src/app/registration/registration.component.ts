import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
	selector: 'app-registration',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './registration.component.html',
	styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

	constructor(private UsersService: UsersService){}

	// registration form submit data
	registrationForm = new FormGroup({
		fullName: new FormControl('Sam', { validators: [Validators.required] }),
		email: new FormControl('sam@test.com', { validators: [Validators.required, Validators.email] }),
		password: new FormControl('Sam@2025', { validators: [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')] }),
		userConfirmPwd: new FormControl('Sam@2025', { validators: [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')] }),
	})

	// registration form fields value get
	get fullName() {
		return this.registrationForm.get('fullName');
	}
	get email() {
		return this.registrationForm.get('email');
	}
	get password() {
		return this.registrationForm.get('password');
	}
	get userConfirmPwd() {
		return this.registrationForm.get('userConfirmPwd');
	}

	// registration form data send to API
	registeredUser:object = {}
	saveRegistration(userValue: any) {
		this.registeredUser = {
			"fullName": userValue.fullName,
			"email": userValue.email,
			"password": userValue.password
		}
		this.UsersService.sendRegisteredUser(this.registeredUser).subscribe((body)=>{console.log(body)})
	}

	// password show/hide button toggle function
	showPassword: boolean = true;
	showConfirmPassword: boolean = true;
	togglePassword(field:any){
		if (field == 'showPassword'){
			this.showPassword = !this.showPassword;
		}
		if (field == 'showConfirmPassword'){
			this.showConfirmPassword = !this.showConfirmPassword;
		}
	}

	// reset form function
	resetForm(formName: any) {
		formName.reset();
	}

}
