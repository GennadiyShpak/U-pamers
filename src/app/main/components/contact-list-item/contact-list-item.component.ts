import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { UserDetailed } from '../../main.model';

@Component({
  selector: 'epm-contact-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent {
  @Input() user!: UserDetailed;
}
