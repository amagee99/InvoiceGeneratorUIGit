import { Component } from '@angular/core';
import { InvoiceTemplatesComponent } from 'src/app/invoice-templates/invoice-templates.component';
import { InvoiceService } from './invoice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  constructor(public invoiceService: InvoiceService) {}
  title = 'invoiceGeneratorUI';
  showInvoicePrompts = false;
  selectedTemplateId: number = 0;
  onTemplateSelected(templateId: number) {
    this.selectedTemplateId = templateId;
  }
}
