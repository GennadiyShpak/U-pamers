import { Component, OnInit, Signal, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { EpmButtonComponent } from '../epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, HEADER_ICONS, HEADER_RIGHT_BLOCK } from '../../../app.config';
import { HeaderIcons, HeaderSettings, SVGIcon } from '../../../app.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'epm-header',
  standalone: true,
  imports: [CommonModule, EpmButtonComponent, NgOptimizedImage, RouterLink],
  templateUrl: './epm-header.component.html',
  styleUrls: ['./epm-header.component.scss']
})
export class EpmHeaderComponent implements OnInit {
  // TODO remove mock data when will be authentication service
  loggedId = true;
  avatar = { src: '/mocks/img/avatar.png' };

  newMessage: Signal<boolean> = signal(true);
  headerSettings: Signal<HeaderSettings> = this.headerService.headerSettings;

  readonly myProfileLink: string = `${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.MyProfile}`;
  readonly chatLink: string = `${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}`;
  readonly messageIcon: SVGIcon = HEADER_ICONS.messageIcon;
  readonly button_themes = BUTTON_THEMES;
  readonly header_icons: HeaderIcons = HEADER_ICONS;
  readonly header_right_block = HEADER_RIGHT_BLOCK;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.initSubscription();
  }

  handleLogIn(): void {
    // do nothing
  }
}
