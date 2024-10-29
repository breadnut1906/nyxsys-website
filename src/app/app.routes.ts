import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: 'team', loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent) },
    { 
        path: 'services',
        children: [
            { path: '', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
            { path: 'led-media-inventories', loadComponent: () => import('./pages/led/led.component').then(m => m.LedComponent) },
            { path: 'static-fixed-inventories', loadComponent: () => import('./pages/static/static.component').then(m => m.StaticComponent) },
            { path: 'business-innovative-solutions', loadComponent: () => import('./pages/business-solutions/business-solutions.component').then(m => m.BusinessSolutionsComponent) },
            { path: 'audience-measurement', loadComponent: () => import('./pages/audience-measurement/audience-measurement.component').then(m => m.AudienceMeasurementComponent) },
        ]
     },
    { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
