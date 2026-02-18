import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  imports: [AsyncPipe],
  template: `
    <h1>Contact Us at support@acme.com</h1>
    <small>Contact Service: {{ contactUsService.status$ | async }}</small>
  `,
})
export class ContactUsPageComponent {
  protected readonly contactUsService = inject(ContactUsService);
}
