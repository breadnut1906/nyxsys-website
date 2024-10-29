import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: 'team', loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent) },
    { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
    { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
