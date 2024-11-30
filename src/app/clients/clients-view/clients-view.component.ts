import { Component } from '@angular/core';
import { BillingViewComponent } from '../../billing/billing-view/billing-view.component';
import { BillingModule } from '../../billing/billing.module';
import { Bill } from '../../billing/bill';
import { BillingService } from '../../billing/billing.service';

@Component({
  selector: 'app-clients-view',
  standalone: true,
  imports: [BillingModule, BillingViewComponent],
  templateUrl: './clients-view.component.html',
  styleUrl: './clients-view.component.css',
})
export class ClientsViewComponent {
  bills: Bill[] = [];

  getBilling(bills:Bill[]) {
    this.bills = bills;
  }
  getBilling2(str:string) {
    
  }
}
