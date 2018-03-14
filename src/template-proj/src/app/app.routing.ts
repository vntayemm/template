import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "./user/user.component";
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RegionComponent } from './region/region.component';

export const appRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'Views', component: UserComponent },
    { path: 'Traffic', component: RegionComponent },
    { path: 'Geo', component: UserComponent },
    { path: 'Orders', component: UserComponent },
    { path: 'News', component: UserComponent },
    { path: 'General', component: UserComponent },
    { path: 'History', component: UserComponent },
    { path: 'Settings', component: UserComponent },
];