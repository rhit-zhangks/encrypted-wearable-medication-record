import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-home',
    template: `
        <h2>hwmr homepage</h2>
        <button routerLink="/login">log in here!</button>
        <button routerLink="/medication_record">see meds</button>
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink]
})
export class HomeComponent {}