import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PassengerDashboardComponent } from '../containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerEditorComponent } from '../containers/passenger-editor/passenger-editor.component';

// components
import { PassengerCountComponent } from '../components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from '../components/passenger-form/passenger-form.component';
import { PassengerSummaryComponent } from '../components/passenger-summary/passenger-summary.component';

// service
import { PassengerDashboardService } from '../models/passenger-dashboard.service';


const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboardComponent },
            { path: ':id', component: PassengerEditorComponent },
            { path: 'edit/:id', component: PassengerEditorComponent }
        ]
    },
]

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerEditorComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent,
        PassengerSummaryComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

}