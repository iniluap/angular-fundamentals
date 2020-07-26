import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form
            (ngSubmit)="handleSubmit(form.value, form.valid)"
            #form="ngForm"
            novalidate>
            <fieldset>
                Passenger name:
                <input
                    type="text"
                    name="fullname"
                    required
                    #fullname="ngModel"
                    [ngModel]="detail?.fullname">
                <p *ngIf="fullname.invalid && fullname.dirty" class="error">
                    Passenger name is required.
                </p>
            </fieldset>

            <fieldset>
                Passenger id:
                <input
                    type="number"
                    name="id"
                    required
                    #id="ngModel"
                    [ngModel]="detail?.id">
                <p *ngIf="id.invalid && id.dirty" class="error">
                    Passenger id is required.
                </p>
            </fieldset>

            <fieldset>
                Is passenger checked in?
                <input
                    type="checkbox"
                    name="checkedIn"
                    [ngModel]="detail?.checkedIn"
                    (ngModelChange)="toggleCheckIn($event)">
            </fieldset>

            <fieldset *ngIf="form.value.checkedIn">
                Check in date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate">
            </fieldset>

            <fieldset>
                Baggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage">
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage">
                        {{ item.value }}
                    </option>
                </select>
            </fieldset>
            <p *ngIf="form.invalid && form.dirty" class="error">
                The form is not valid. You need to correct some information.
            </p>

            <button type="submit" [disabled]="form.invalid">
                Update passanger
            </button>
        </form>
    `
})
export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },
    {
        key: 'hand-only',
        value: 'Hand baggage'
    },
    {
        key: 'hold-only',
        value: 'Hold baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and hold baggage'
    }];

    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if(isValid) {
            this.update.emit(passenger);
        }
    }
}