import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div class="detail-wrapper">
            <p class="date">
                Passenger ID:
                {{ detail.id ? (detail.id ) : 'Unknown' }}
            </p>
            <p class="date">
                Check in date:
                {{ detail.checkedIn ? (detail.checkInDate | date: 'yMMMd' | uppercase ) : 'Not checked in' }}
            </p>
            <p class="date">
                Baggage:
                {{ detail.baggage ? (detail.baggage ) : 'No baggage declared' }}
            </p>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
}
