import { Component, signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.scss',
 	imports: [RouterOutlet, RegistrationComponent]
})
export class App {
	protected readonly title = signal('To-Do-List');
}
