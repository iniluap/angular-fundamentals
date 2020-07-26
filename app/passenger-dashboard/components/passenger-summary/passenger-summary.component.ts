import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-summary',
    styleUrls: ['passenger-summary.component.scss'],
    template: `
        <div class="summary-wrapper">
            <div class="summary-item">
                <h4>
                    <span
                        class="status"
                        [style.backgroundColor]="(detail.checkedIn ? 'green' : 'red')">
                    </span>
                    {{ detail.fullname }}
                </h4>
                <div class="button-wrapper">
                    <button (click)="toggleView()">
                        {{ viewing ? 'Hide' : 'View' }}
                    </button>
                    <button (click)="goToEdit()">
                        Edit
                    </button>
                    <button (click)="onRemove()">
                        Remove
                    </button>
                </div>
            </div>
            <passenger-detail
                *ngIf="this.viewing"
                [detail]="detail">
            </passenger-detail>
        </div>
    `
})
export class PassengerSummaryComponent{
    viewing: boolean = false;

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    constructor() {}
    toggleView() {
        this.viewing = !this.viewing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }

    goToEdit() {
        this.view.emit(this.detail);
    }

}
