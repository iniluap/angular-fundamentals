import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../models/passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-editor',
    styleUrls: ['passenger-editor.component.scss'],
    template: `
        <div>
            <button (click)="goBack()">&lsaquo; Go back</button>
            <passenger-form
                [detail]="passenger"
                (update)="onUpdatePassenger($event)">
            </passenger-form>
        </div>
    `
})
export class PassengerEditorComponent implements OnInit {
    passenger: Passenger;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService
    ) {}

    ngOnInit() {
        this.route.params
            .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }
}
