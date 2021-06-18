import { RouterModule, Routes } from '@angular/router';

//--
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component'

const featureRoutes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './landing-page/landing-page.module#LandingPageModule'
    // },
    {
        path: '',
        component: LayoutComponent,
        data: {
            breadcrumbs: 'App'
        },
        children: [
            { path: '', loadChildren: './home/home.module#HomeModule', },
        ]
    },
    {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
    },
    { path: '**', redirectTo: 'error' }

];


export const featuresRouting = RouterModule.forRoot(featureRoutes);

