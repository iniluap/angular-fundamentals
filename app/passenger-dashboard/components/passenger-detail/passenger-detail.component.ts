import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span
                class="status"
                [class.checked-in]="detail.checkedIn">
            </span>
            <span
                class="status"
                [style.backgroundColor]="(detail.checkedIn ? 'green' : 'red')">
            </span>
                {{ detail.fullname }}
            <p>{{ detail | json }}</p>
            <div class="date">
                Check in date:
                {{ detail.checkedIn ? (detail.checkInDate | date: 'yMMMd' | uppercase ) : 'Not checked in' }}
            </div>
            <div class="children">
                Children: {{ detail.children?.length || 0 }}
            </div>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor() {}
}