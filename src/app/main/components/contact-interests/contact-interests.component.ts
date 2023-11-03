import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditProfileLinkComponent } from '../contact-edit-profile-link/contact-edit-profile-link.component';
import { EpmChipsComponent } from '../../../shared/components/epm-chips/epm-chips.component';

@Component({
  selector: 'epm-contact-interests',
  standalone: true,
  imports: [CommonModule, ContactEditProfileLinkComponent, EpmChipsComponent],
  templateUrl: './contact-interests.component.html',
  styleUrls: ['./contact-interests.component.scss']
})
export class ContactInterestsComponent {
  @Input() interests!: string[];
}
