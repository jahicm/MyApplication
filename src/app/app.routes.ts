import { Routes } from '@angular/router';
import { BillingViewComponent } from './billing/billing-view/billing-view.component';
import { TransfersViewComponent } from './transfers/transfers-view/transfers-view.component';
import { ClientsViewComponent } from './clients/clients-view/clients-view.component';

export const routes: Routes = [
    {path:"billing", component:BillingViewComponent},
    {path:"transfers", component:TransfersViewComponent},
    {path:"clients", component:ClientsViewComponent}
];
