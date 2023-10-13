import { Component, effect, HostBinding, Injector, OnInit, Signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, tap } from 'rxjs';
import { ToasterMessage } from '../../../app.model';
import { APP_ROUTER_NAME, TOASTER_ICONS } from '../../../app.config';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'epm-toaster',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './epm-toaster.component.html',
  styleUrls: ['./epm-toaster.component.scss']
})
export class EpmToasterComponent implements OnInit {
  @HostBinding('class.hidden') isToasterHidden = true;

  toasterMessage!: Signal<ToasterMessage>;

  readonly routerNames: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly closeIcon: string = TOASTER_ICONS.Close;

  constructor(
    private toasterService: ToasterService,
    private injector: Injector,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupNavigationEventListener();
    this.toasterMessage = this.toasterService.toasterSettings;
    this.initializeToasterVisibility();
  }

  onCloseClick(): void {
    this.toasterService.closeToaster();
  }

  private setupNavigationEventListener(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.manageContactPageToaster();
        })
      )
      .subscribe();
  }

  private manageContactPageToaster(): void {
    if (this.shouldDisplayContactPageToaster()) {
      this.toasterService.getContactPageToasterSettings();
      this.toasterService.openToaster();
    } else {
      this.toasterService.closeToaster();
    }
  }

  private shouldDisplayContactPageToaster(): boolean {
    const [_root, _page, pageType] = this.router.url.split('/');

    return pageType === this.routerNames.Contact && this.isUserStateSuitable();
  }

  private isUserStateSuitable(): boolean {
    // TODO: change isLoggedIn and isProfileFilled with real services
    const isLoggedIn = this.toasterService.isLoggedIn();
    const isProfileFilled = this.toasterService.isProfileFilled();

    return !isLoggedIn || (isLoggedIn && !isProfileFilled);
  }

  private initializeToasterVisibility(): void {
    effect(
      () => {
        this.isToasterHidden = this.toasterService.isHidden();
      },
      { injector: this.injector }
    );
  }
}
