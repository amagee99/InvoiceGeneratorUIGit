import { Component, Output } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';
import { InvoiceTemplate } from '../invoice-template';
import { InvoiceTemplateService } from '../invoice-template.service';
import { InvoicePromptsComponent } from 'src/app/invoice-prompts/invoice-prompts.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-invoice-templates',
  templateUrl: './invoice-templates.component.html',
  styleUrls: ['./invoice-templates.component.css']
})
export class InvoiceTemplatesComponent {
  activeOption: string = '';
  invoiceTemplates: InvoiceTemplate[] = [];
  constructor(private invoiceService: InvoiceService, private invoiceTemplateService: InvoiceTemplateService, private invoicePromptsComponent: InvoicePromptsComponent) {}
  selectedTemplateId: number = 0;
  @Output() templateSelected = new EventEmitter<number>();
  InvoiceTemplate: InvoiceTemplate = {} as InvoiceTemplate;

  selectTemplate(templateId: number){
    this.selectedTemplateId = templateId;
    this.templateSelected.emit(templateId);
  }

  toggleInvoicePrompts() {
    this.invoiceService.showInvoicePrompts = true;
  }
  toggleMenuOption(option: string) {
    this.activeOption = option;
    if (option = 'templatesList'){
      this.showInvoiceTemplates();
    };

  }

  showInvoiceTemplates(){
    this.invoiceTemplateService.getInvoiceTemplates()
    .subscribe(templates => {
      this.invoiceTemplates = templates;
    })
  }
  
  onSubmit(invoiceTemplate: InvoiceTemplate) {

    this.invoiceTemplateService.createInvoiceTemplate(invoiceTemplate).subscribe({
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
  
}
