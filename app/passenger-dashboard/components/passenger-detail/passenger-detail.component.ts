import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
        <div>
            <h4>
                <span
                    class="status"
                    [style.backgroundColor]="(detail.checkedIn ? 'green' : 'red')">
                </span>
                {{ detail.fullname }}
            </h4>
            <div class="date">
                Check in date:
                {{ detail.checkedIn ? (detail.checkInDate | date: 'yMMMd' | uppercase ) : 'Not checked in' }}
            </div>
            <button (click)="goToEdit()">
                Edit
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})
export class PassengerDetailComponent {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    constructor() {}

    onRemove() {
        this.remove.emit(this.detail);
    }
}