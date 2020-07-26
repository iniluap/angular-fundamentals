import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PassengerDashboardService } from '../../models/passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-summary
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (view)="handleView($event)"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </passenger-summary>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(
        private router: Router,
        private passangerService: PassengerDashboardService
    ) {}

    ngOnInit() {
        this.passangerService
            .getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data);}

    handleEdit(event: Passenger) {
        this.passangerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map(
                    (passenger: Passenger) => {
                        if(passenger.id === event.id) {
                            passenger = Object.assign({}, passenger, event);
                        }
                        return passenger;
                    }
                )
            })
    }
    handleRemove(event: Passenger) {
        this.passangerService
            .removePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter(
                    (passenger: Passenger) => {
                        return passenger.id !== event.id;
                    }
                )
            })
    }

    handleView(event: Passenger) {
        this.router.navigate(['/passengers', event.id]);
    }
}