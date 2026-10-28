import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    template: `
        <button routerLink="">back to home</button>
        <h3>this is the login page!</h3>
        <input #username type="text" placeholder="username"/>
        <input #password type="password" placeholder="password"/>
        <button (click)="handleLogin(username.value, password.value)">useless login button</button>
    `,
    imports: [RouterLink]
})
export class LoginComponent {
    handleLogin(user: string, pass: string) {
        console.log("hello world", user, pass);
    }
}