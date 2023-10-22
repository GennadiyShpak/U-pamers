import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  HostListener,
  Injector,
  OnInit,
  Signal,
  signal
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

import { EpmButtonComponent } from '../epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES, HEADER_RIGHT_BLOCK } from '../../../app.config';
import { HeaderConfig } from '../../../app.model';
import { HeaderService } from '../../../services/header.service';
import { EpmNavigationIconComponent } from '../epm-navigation-icon/epm-navigation-icon.component';

@Component({
  selector: 'epm-header',
  standalone: true,
  imports: [CommonModule, EpmButtonComponent, NgOptimizedImage, RouterLink, EpmNavigationIconComponent],
  templateUrl: './epm-header.component.html',
  styleUrls: ['./epm-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpmHeaderComponent implements OnInit {
  @HostListener('window:scroll')
  onScroll(): void {
    this.shouldAddShadow = !this.headerSettings().colored && window.scrollY > 0;
  }

  // TODO remove mock data when will be authentication service
  isAuthorized = true;
  avatar = { src: '/mocks/img/avatar.png' };
  shouldAddShadow = false;

  newMessage: Signal<boolean> = signal(true);
  headerSettings: Signal<HeaderConfig> = this.headerService.headerSettings;

  readonly myProfileLink: string = `${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.MyProfile}`;
  readonly chatLink: string = `${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Chat}`;
  readonly loginLink: string = `${APP_ROUTER_NAME.Auth}/${APP_ROUTER_NAME.LogIn}`;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly headerRightBlock: typeof HEADER_RIGHT_BLOCK = HEADER_RIGHT_BLOCK;

  constructor(
    private headerService: HeaderService,
    private cdr: ChangeDetectorRef,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.headerService.initSubscription();
    this.initChangeDetectionEffect()
  }

  private initChangeDetectionEffect(): void {
    effect(() => {
        this.headerSettings();
        this.cdr.detectChanges()
      },
      { injector: this.injector })
  }

  back(): void {
    this.headerService.back();
  }
}
