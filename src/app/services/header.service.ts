import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';

import { HeaderSettings } from '../app.model';
import { headerSettingsSet } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerSettings$: WritableSignal<HeaderSettings> = signal(headerSettingsSet.mainRoot);
  headerSettings: Signal<HeaderSettings> = computed(this.headerSettings$);
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  initSubscription(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
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

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
