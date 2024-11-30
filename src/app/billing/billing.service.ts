import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from './bill';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BillingService {
 
  constructor(private httpClient: HttpClient) {}

  submit(bill: Bill): Observable<void> {
    console.log("Submitted "+environment.apiUrl);
    return this.httpClient.post<void>(environment.apiUrl + "/billing", bill);
  }
  getBills():Observable<Bill[]>
  {
    return this.httpClient.get<Bill[]>(environment.apiUrl+"/bills");
  }
  getBill(billId:string):Observable<Bill>
  {
    return this.httpClient.get<Bill>(environment.apiUrl+"/bill/"+billId);
  }
}
