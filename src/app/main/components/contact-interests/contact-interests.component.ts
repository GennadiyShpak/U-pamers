import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditProfileLinkComponent } from '../contact-edit-profile-link/contact-edit-profile-link.component';
import { EpmChipsComponent } from '../../../shared/components/epm-chips/epm-chips.component';
import { INTEREST_CHIPS_LIST, INTEREST_CHIPS_NAME } from '../../../app.config';
import { Chips } from '../../../app.model';

@Component({
  selector: 'epm-contact-interests',
  standalone: true,
  imports: [CommonModule, ContactEditProfileLinkComponent, EpmChipsComponent],
  templateUrl: './contact-interests.component.html',
  styleUrls: ['./contact-interests.component.scss']
})
export class ContactInterestsComponent implements OnInit {
  @Input() interests!: string[];

  chipsArray: Chips[] = [];

  ngOnInit(): void {
    this.prepareInterestsData();
  }

  prepareInterestsData(): void {
    if (!this.interests.length) return;

    this.chipsArray = this.interests.map(interest => {
      const chipsName = INTEREST_CHIPS_NAME[interest as keyof typeof INTEREST_CHIPS_NAME]
      const chipsData = INTEREST_CHIPS_LIST[chipsName];

        return {
          chipsData,
          isEditable: false,
          isActive: true
        }
      }
    )
  }
}
