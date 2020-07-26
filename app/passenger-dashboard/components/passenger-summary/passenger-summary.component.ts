import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-summary',
    styleUrls: ['passenger-summary.component.scss'],
    template: `
        <div>
            <h4>
                <span
                    class="status"
                    [style.backgroundColor]="(detail.checkedIn ? 'green' : 'red')">
                </span>
                {{ detail.fullname }}
            </h4>
            <button (click)="goToPassenger()">
                View
            </button>
            <button (click)="goToEdit()">
                Edit
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})
export class PassengerSummaryComponent{
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

    goToEdit() {
        this.view.emit(this.detail);
    }

    goToPassenger() {
        this.view.emit(this.detail);
    }
}
