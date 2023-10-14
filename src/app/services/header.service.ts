import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';
import { Location } from '@angular/common';

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
    private location: Location
  ) {}
  // http://localhost:3355/main/chat  |   http://localhost:3355/main/chat/2   |    http://localhost:3355/main/chat
  initSubscription(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(event => {
          console.log(
            this.lastRoute !== (event as NavigationEnd).urlAfterRedirects,
            this.lastRoute,
            (event as NavigationEnd).urlAfterRedirects
          );
          console.log(this.history);
          if (this.lastRoute !== (event as NavigationEnd).urlAfterRedirects) {
            this.history.push((event as NavigationEnd).urlAfterRedirects);
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
    const lastRoute = this.history.at(-1) || '';
    const aaa = lastRoute.split('/').slice(0, lastRoute.length - 2);
    console.log(aaa);
    this.lastRoute = this.history.at(-2) || '';
    console.log(this.lastRoute);
    // console.log(this.history);
    this.history.pop();
    if (this.history.length > 0) {
      this.router.navigate(aaa);
      // this.location.back();
    } else {
      console.log('main');
      this.router.navigateByUrl('/');
    }
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
