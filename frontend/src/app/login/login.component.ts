import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    standalone: true,
    template: `
        <h3>this is the login page!</h3>
        <label>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
    `
})
export class LoginComponent {}