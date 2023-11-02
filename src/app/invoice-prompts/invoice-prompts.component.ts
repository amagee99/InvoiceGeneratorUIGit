import { Component, Input } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { InvoiceTemplateService } from '../invoice-template.service';

@Component({
  selector: 'app-invoice-prompts',
  templateUrl: './invoice-prompts.component.html',
  styleUrls: ['./invoice-prompts.component.css']
})

export class InvoicePromptsComponent {
  constructor(private invoiceService: InvoiceService, private invoiceTemplateService: InvoiceTemplateService){}
  invoice: Invoice = {} as Invoice;
  @Input() selectedTemplateId: number = 0;
  invoiceId:number = 0;

  onSubmit(invoice: Invoice){
    this.invoiceId = invoice.id;
    this.invoiceService.createInvoice(invoice).subscribe({
      next: (response) => {
        console.log('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
      }
    });
  }
  generateInvoice(){
    this.invoiceService.fillInTemplateWithInvoice(this.invoiceId, this.selectedTemplateId).subscribe({
      next: (response) => {
        console.log('Response:', response);
      },
      error: (error) => {
        console.error("invoiceId: " + this.invoiceId, "template Id: " + this.selectedTemplateId, error);
      },
      complete: () => {
      }
    });
  }
}
