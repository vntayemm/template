import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from "./user/user.component";

export const appRoutes: Routes = [
    { path: '', component: UserComponent },
    { path: 'Views', component: UserComponent },
    { path: 'Traffic', component: UserComponent },
    { path: 'Geo', component: UserComponent },
    { path: 'Orders', component: UserComponent },
    { path: 'News', component: UserComponent },
    { path: 'General', component: UserComponent },
    { path: 'History', component: UserComponent },
    { path: 'Settings', component: UserComponent },
];