import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

import { DetailedSocialLink, ExpandedUserDetailed } from '../../main.model';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, ICON_NAMES, SOCIAL_ICONS } from '../../../app.config';
import { SvgIconComponent } from '../../../shared/components/svg-icon/svg-icon.component';
import { AgePipe } from '../../../shared/pipes/age.pipe';
import { SetUserAvatarPipe } from '../../../shared/pipes/set-user-avatar.pipe';

@Component({
  selector: 'epm-contact-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, EpmButtonComponent, SvgIconComponent, AgePipe, SetUserAvatarPipe],
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent {
  @Input() user!: ExpandedUserDetailed;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly iconNames: typeof ICON_NAMES = ICON_NAMES;

  constructor(private router: Router) {}

  onChatClick(event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}/${this.user.userId}`);
  }

  onSocialClick(event: MouseEvent, link: string, type: SOCIAL_ICONS): void {
    event.stopPropagation();
    const target = type === SOCIAL_ICONS.Skype ? '_self' : '_blank';
    window.open(link, target);
  }

  trackByPriority(_index: number, social: DetailedSocialLink): number {
    return social.priority;
  }
}
