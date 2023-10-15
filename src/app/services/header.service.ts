import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';

import { HeaderSettings } from '../app.model';
import { headerSettingsSet, MAIN_ROUTE } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerSettings$: WritableSignal<HeaderSettings> = signal(headerSettingsSet['mainRoot']);
  headerSettings: Signal<HeaderSettings> = computed(this.headerSettings$);

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
        tap(event => {
          if (!this.isBackByHistory) {
            this.history.push((event as NavigationEnd).urlAfterRedirects);
          }
          if (this.history.length > 3) {
            this.history.shift();
          }
          if ((event as NavigationEnd).urlAfterRedirects === MAIN_ROUTE) {
            this.history = [];
          }
          this.isBackByHistory = false;
        }),
        map(() => this.rootRoute(this.route)),
        filter(route => route.outlet === 'primary'),
        mergeMap((route: ActivatedRoute): Observable<HeaderSettings> => route.data as Observable<HeaderSettings>),
        tap((event: HeaderSettings) => {
          this.headerSettings$.set(event);
        })
      )
      .subscribe();
  }

  addTitle(title: string): void {
    this.headerSettings$.mutate(settings => (settings.title = title));
  }

  back(): void {
    const previousRoutePage: string[] = this.history[this.history.length - 2]?.split('/');
    const currentPage: string[] = this.router.url.split('/');
    if (this.shouldNavigateToRoot(previousRoutePage, currentPage)) {
      this.router.navigateByUrl('/');
      return;
    }
    this.history.pop();
    this.router.navigate(previousRoutePage);
    this.isBackByHistory = true;
  }

  private shouldNavigateToRoot(previousRoutePage: string[], currentPage: string[]): boolean {
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
