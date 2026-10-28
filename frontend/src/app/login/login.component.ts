import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    template: `
        <button routerLink="">back to home</button>
        <h3>this is the login page!</h3>
        <label>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button (click)=handleLogin()>useless login button</button>
    `,
    imports: [RouterLink]
})
export class LoginComponent {
    handleLogin() {
        console.log("hello world");
    }
}