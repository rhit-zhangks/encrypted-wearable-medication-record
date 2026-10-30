import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

interface MedicationRecord {
    id: number;
    doctor: string;
    prescribedOn: Date;
    name: string;
    dosage: string;
    frequency: string;
    verifier: string;
    verifiedOn: Date;
}

@Component({
    selector: 'app-medication-records',
    standalone: true,
    imports: [DatePipe],
    template: `
        <table>
            <thead>
                <tr>
                    <th>Doctor</th>
                    <th>Name</th>
                    <th>Dosage / Frequency</th>
                    <th>Last verified by</th>
                </tr>
            </thead>
            <tbody>
                @for (record of medicationRecords; track record.id) {
                    <tr>
                        <td>
                            {{ record.doctor }}
                            <small>{{ record.prescribedOn | date: 'mediumDate' }}</small>
                        </td>
                        <td>{{ record.name }}</td>
                        <td>
                            <span class="dose">
                                <span>{{ record.dosage }}</span>
                                <span class="slash">/</span>
                                <span>{{ record.frequency }}</span>
                            </span>
                        </td>
                        <td>
                            {{ record.verifier }}
                            <small>{{ record.verifiedOn | date: 'mediumDate' }}</small>
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    `,
    styles: `
        table {
            border: 4px double #333;
            border-collapse: collapse;
        }
        th, td {
            border: 4px double #333;
            padding: 0.5rem 0.75rem;
            text-align: left;
        }
        small {
            display: block;
            font-size: 0.75em;
            color: #666;
        }
        .dose {
            display: grid;
            grid-template-columns: 5fr auto 6fr;
            align-items: center;
            column-gap: 0.75rem;
            white-space: nowrap;
        }
        .dose span:first-child {
            text-align: right;
        }
        .slash {
            font-size: 2em;
            font-weight: 200;
            line-height: 1;
            color: #666;
        }
    `
})
export class MedicationRecordsComponent {
    medicationRecords: MedicationRecord[] = [
        {
            id: 1,
            doctor: 'Dr. Smith',
            prescribedOn: new Date('2026-03-14'),
            name: 'Amoxicillin',
            dosage: '500mg',
            frequency: '3x daily',
            verifier: 'J. Rivera',
            verifiedOn: new Date('2026-10-01'),
        },
        {
            id: 2,
            doctor: 'Dr. Patel',
            prescribedOn: new Date('2026-05-02'),
            name: 'Lisinopril',
            dosage: '10mg',
            frequency: '1x daily',
            verifier: 'M. Chen',
            verifiedOn: new Date('2026-09-18'),
        },
        {
            id: 3,
            doctor: 'Dr. Nguyen',
            prescribedOn: new Date('2026-06-21'),
            name: 'Metformin',
            dosage: '850mg',
            frequency: '2x daily',
            verifier: 'J. Rivera',
            verifiedOn: new Date('2026-10-12'),
        },
        {
            id: 4,
            doctor: 'Dr. Smith',
            prescribedOn: new Date('2026-08-09'),
            name: 'Ibuprofen',
            dosage: '400mg',
            frequency: 'As needed',
            verifier: 'A. Okafor',
            verifiedOn: new Date('2026-10-25'),
        },
        {
            id: 5,
            doctor: 'Dr. Alvarez',
            prescribedOn: new Date('2026-09-30'),
            name: 'Atorvastatin',
            dosage: '20mg',
            frequency: '1x nightly',
            verifier: 'M. Chen',
            verifiedOn: new Date('2026-10-28'),
        },
        {
            id: 6,
            doctor: 'Dr. Patel',
            prescribedOn: new Date('2026-10-03'),
            name: 'Acetaminophen',
            dosage: '1000mg',
            frequency: '3x daily',
            verifier: 'A. Okafor',
            verifiedOn: new Date('2026-10-27'),
        },
    ];
}