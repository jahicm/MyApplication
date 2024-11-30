import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Bill } from '../bill';
import { BillingService } from '../billing.service';

@Component({
  selector: 'app-billing-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './billing-view.component.html',
  styleUrl: './billing-view.component.css',
})
export class BillingViewComponent implements OnInit {
  billingForm: FormGroup = new FormGroup({});
  billingForm2: FormGroup = new FormGroup({});
  @Output() billsEmitter = new EventEmitter<Bill[]>();

  bills: Bill[] = [];
  bill!: Bill;

  constructor(
    private formBuilder: FormBuilder,
    private billingService: BillingService
  ) {
    this.billingForm = this.formBuilder.group({
      name: [],
      surname: [],
      dob: [],
      amount: [],
    });

    this.billingForm2 = this.formBuilder.group({
      id: [],
    });

    this.getBills();
    this.billsEmitter.emit(this.bills);
  }
  
  ngOnInit() {}
  onSubmit(): void {
    const bill = this.billingForm.value;
    console.log('Submitting bill:', bill);

    this.billingService.submit(bill).subscribe({
      next: () => {
        alert('success');
      },
      error: (err) => {
        alert('Failed ');
      },
    });
  }
  getBills(): void {
    this.billingService.getBills().subscribe({
      next: (bill) => {
        this.bills = bill;
        console.log(this.bills);
      },
      error: (err) => {
        alert('Failed to get Bills');
      },
    });

    console.log('Get Bills');
  }
  onSubmit2(billId: string): void {
    this.billingService.getBill(billId).subscribe({
      next: (bill) => {
        this.bill = bill;

        alert(
          bill.name + '  ' + bill.surname + '  ' + bill.dob + ' ' + bill.amount
        );
      },
      error: (err) => {
        alert("Couldn't get BillId:" + billId);
      },
    });
  }
}
