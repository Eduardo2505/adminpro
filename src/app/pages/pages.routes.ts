import { Routes, RouterModule } from '@angular/router';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráfica' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesa' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS' } },
            { path: 'accout', component: AccoutSettingsComponent, data: { titulo: 'Ajuuste del Tema' } },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
