import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceTemplatesComponent } from './invoice-templates/invoice-templates.component';
import { InvoicePromptsComponent } from './invoice-prompts/invoice-prompts.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';
import { InvoiceTemplateService } from './invoice-template.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceTemplatesComponent,
    InvoicePromptsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InvoiceService, 
    InvoiceTemplateService,
    InvoicePromptsComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
