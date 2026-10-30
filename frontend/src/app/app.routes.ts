import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicationRecordsComponent } from './medication_record/medication_record.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{path: '', component: HomeComponent}, {path: 'login', component: LoginComponent}, {path: 'medication_record', component: MedicationRecordsComponent}];
