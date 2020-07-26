import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    styleUrls: ['not-found.component.scss'],
    template: `
        <div>
            <h2>404</h2>
            <p>Sorry, page not found. Go back to <a routerLink="/">homepage</a>.</p>
        </div>
    `
})
export class NotFoundComponent {}
