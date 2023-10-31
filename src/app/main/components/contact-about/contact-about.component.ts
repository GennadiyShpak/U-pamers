import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditProfileLinkComponent } from '../contact-edit-profile-link/contact-edit-profile-link.component';

@Component({
  selector: 'epm-contact-about',
  standalone: true,
  imports: [CommonModule, ContactEditProfileLinkComponent],
  templateUrl: './contact-about.component.html',
  styleUrls: ['./contact-about.component.scss']
})
export class ContactAboutComponent {
  @Input() about!: string;
}
