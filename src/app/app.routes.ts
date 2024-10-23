import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: '**', loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) },
];
