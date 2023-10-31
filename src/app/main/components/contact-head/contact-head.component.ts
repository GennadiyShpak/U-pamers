import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SvgIconComponent } from '../../../shared/components/svg-icon/svg-icon.component';
import { BUTTON_THEMES, ICON_NAMES, SOCIAL_ICONS } from '../../../app.config';
import { DetailedSocialLink, ExpandedUserDetailed } from '../../main.model';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';

@Component({
  selector: 'epm-contact-head',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SvgIconComponent, EpmButtonComponent],
  templateUrl: './contact-head.component.html',
  styleUrls: ['./contact-head.component.scss']
})
export class ContactHeadComponent {
  @Input({ required: true }) user!: ExpandedUserDetailed;
  @Input() editableAvatar?: boolean = false;

  readonly iconNames: typeof ICON_NAMES = ICON_NAMES;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;

  trackByPriority(_index: number, social: DetailedSocialLink): number {
    return social.priority;
  }

  onSocialClick(event: MouseEvent, link: string, type: SOCIAL_ICONS): void {
    event.stopPropagation();
    const target = type === SOCIAL_ICONS.Skype ? '_self' : '_blank';
    window.open(link, target);
  }

  onAvatarEdit(): void {
    // edit avatar
  }
}
