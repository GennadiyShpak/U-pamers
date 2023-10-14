import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';

import { HeaderSettings } from '../app.model';
import { headerSettingsSet } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerSettings$: WritableSignal<HeaderSettings> = signal(headerSettingsSet['mainRoot']);
  headerSettings: Signal<HeaderSettings> = computed(this.headerSettings$);

  private lastRoute = '';
  private history: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  initSubscription(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(event => {
          if (
            this.history.length < 2 ||
            this.history?.[1]?.split('/')?.length < (event as NavigationEnd).urlAfterRedirects.split('/')?.length
          ) {
            this.history.push((event as NavigationEnd).urlAfterRedirects);
          }

          if ((event as NavigationEnd).urlAfterRedirects === '/main/contact') {
            this.history = [];
          }

          if (this.history.length > 2) {
            this.history.shift();
          }
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
    const previousRoutePage = this.history[0].split('/');
    const currentPage = this.router.url.split('/');

    if (previousRoutePage[2] !== currentPage[2]) {
      this.router.navigate(previousRoutePage);
    } else {
      const filteredRoute = currentPage.slice(0, -1).join('/');
      this.router.navigateByUrl(filteredRoute);
    }
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
