import { NgModule } from '@angular/core';


//--
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home.routing'; 
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [DashboardComponent],
    exports: [
    ]
})
export class HomeModule { }
