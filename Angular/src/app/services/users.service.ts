import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: HttpClient) { }

	private usersApiUrl = "http://localhost:3000/users";

	sendRegisteredUser(body:{}){
		return this.http.post(this.usersApiUrl, body)
	}

}
