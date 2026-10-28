import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
        <h2>hwmr homepage</h2>
        <button routerLink="/login">log in here!</button>
    `,
    imports: [RouterLink]
})
export class HomeComponent {}