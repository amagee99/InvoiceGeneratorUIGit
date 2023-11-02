import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceTemplate } from './invoice-template';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
   
})
export class InvoiceTemplateService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://localhost:7184'; 

  getInvoiceTemplates(): Observable<InvoiceTemplate[]> {
    return this.http.get<InvoiceTemplate[]>(`${this.apiUrl}/api/invoicetemplates`);
  }

  createInvoiceTemplate(invoiceTemplate: InvoiceTemplate): Observable<InvoiceTemplate> {
    return this.http.post<InvoiceTemplate>(`${this.apiUrl}/api/invoicetemplates`, invoiceTemplate);
  }


}
