import { RouterModule, Routes } from '@angular/router';

//--
import { NotFoundComponent } from './not-found/not-found.component';
import { PermissionDeniedComponent } from './permission-denied/permission-denied.component';

const errorRoutes: Routes = [
    { path: '', redirectTo: 'not-found', pathMatch: 'full' },
    {

        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: 'permission-denied',
        component: PermissionDeniedComponent
    }
];

export const errorRouting = RouterModule.forChild(errorRoutes);