import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';

import { HeaderConfig } from '../app.model';
import { HEADER_CONFIG_LIST, HEADER_CONFIG_NAME, HEADER_RIGHT_BLOCK, CONTACT_ROUTE } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerSettings$: WritableSignal<HeaderConfig> = signal(HEADER_CONFIG_LIST[HEADER_CONFIG_NAME.mainRoot]);
  headerSettings: Signal<HeaderConfig> = computed(this.headerSettings$);

  private history: string[] = [];
  private isBackByHistory = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  initSubscription(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(event => this.setRoutingHistory(event)),
        map(() => this.rootRoute(this.route)),
        filter(route => route.outlet === 'primary'),
        mergeMap((route: ActivatedRoute): Observable<HeaderConfig> => route.data as Observable<HeaderConfig>),
        tap((event: HeaderConfig) => {
          this.headerSettings$.set(event);
        })
      )
      .subscribe();
  }

  addTitle(title: string): void {
    this.headerSettings$.mutate(settings => (settings.title = title));
  }

  showSkipButton(): void {
    this.headerSettings$.mutate(settings => (settings.right = HEADER_RIGHT_BLOCK.Skip));
  }

  back(): void {
    const previousRoutePage: string[] | undefined = this.history.at(-2)?.split('/');
    const currentPage: string[] = this.router.url.split('/');
    if (this.shouldNavigateToRoot(previousRoutePage, currentPage)) {
      this.router.navigateByUrl('/');
      return;
    } else {
      this.history.pop();
      this.router.navigate(previousRoutePage as string[]);
      this.isBackByHistory = true;
    }
  }

  private setRoutingHistory(event: Event): void {
    if (!this.isBackByHistory) {
      this.history.push((event as NavigationEnd).urlAfterRedirects);
    }
    if (this.history.length > 3) {
      this.history.shift();
    }
    if ((event as NavigationEnd).urlAfterRedirects === CONTACT_ROUTE) {
      this.history = [];
    }
    this.isBackByHistory = false;
  }

  private shouldNavigateToRoot(previousRoutePage: string[] | undefined, currentPage: string[]): boolean {
    return (
      (previousRoutePage && previousRoutePage[2] == currentPage[2] && previousRoutePage.length > currentPage.length) ||
      this.history.length <= 1
    );
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
