import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
        <h1>hwmr homepage</h1>
        <button routerLink="/login">log in here!</button>
    `,
    imports: [RouterLink]
})
export class HomeComponent {}