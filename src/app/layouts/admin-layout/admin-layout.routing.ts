import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ConfigurationComponent } from '../../configuration/configuration.component';



export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'recipes',     component: TableListComponent },
    { path: 'configuration',  component: ConfigurationComponent },

];
