import { Component, OnInit } from '@angular/core';

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
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor(private passangerService: PassengerDashboardService) {}

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
}