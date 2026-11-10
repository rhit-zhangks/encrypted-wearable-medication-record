import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <button routerLink="">back to home</button>
        <h3>this is the login page!</h3>
        <input #username type="text" placeholder="username"/>
        <input #password type="password" placeholder="password"/>
        <button (click)="handleLogin(username.value, password.value)">useless login button</button>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class LoginComponent {
    private http = inject(HttpClient);

    handleLogin(user: string, pass: string) {
        this.http.post('http://localhost:3000/api/login', { username: user, password: pass })
            .subscribe({
                next: (response) => {
                    console.log("Login successful", response);
                },
                error: (error) => {
                    console.error("Login failed", error);
                }
            });
    }
}