import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';



export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'recipes',     component: TableListComponent },
    { path: 'configuration',  component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },

];
