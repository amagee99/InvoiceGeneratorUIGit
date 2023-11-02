import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePromptsComponent } from './invoice-prompts.component';

describe('InvoicePromptsComponent', () => {
  let component: InvoicePromptsComponent;
  let fixture: ComponentFixture<InvoicePromptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoicePromptsComponent]
    });
    fixture = TestBed.createComponent(InvoicePromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
