import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { map, Observable, of, take, tap } from 'rxjs';

import { DetailedSocialLink, ExpandedUserDetailed, UserDetailed } from '../main.model';
import { SOCIAL_ICONS } from '../../app.config';
import { USERS_MOCK } from '../../../mocks/mock-data';
import { PRIORITY_ORDER, SOCIAL_PROFILE_LINKS_ROOT } from '../main.config';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  private userList$: WritableSignal<ExpandedUserDetailed[]> = signal([]);
  userList: Signal<ExpandedUserDetailed[]> = computed(this.userList$);

  clearUserList(): void {
    this.userList$.set([]);
  }

  getUsers(): void {
    of(USERS_MOCK)
      .pipe(
        map(newUserList => this.expandSocials(newUserList)),
        tap(newUserList => {
          this.userList$.update(userList => [...userList, ...newUserList]);
        }),
        take(1)
      )
      .subscribe();
  }

  getUserData(id: string): Observable<ExpandedUserDetailed> {
    return of(USERS_MOCK.find(user => user.userId === id)!).pipe(
      map(user => {
        const userSocials = Object.entries(user.socials);
        const socials: DetailedSocialLink[] = userSocials
          .map(this.getDetailedSocials)
          .sort((a, b) => a.priority - b.priority);

        return <ExpandedUserDetailed>{ ...user, socials };
      }),
      take(1)
    );
  }

  getPersonalData(): Observable<UserDetailed> {
    return of(USERS_MOCK.find(user => user.userId === '100')!).pipe(take(1));
  }

  getExpandedPersonalData(): Observable<ExpandedUserDetailed> {
    return this.getPersonalData().pipe(
      map(user => {
        const userSocials = Object.entries(user.socials);
        const socials: DetailedSocialLink[] = userSocials
          .map(this.getDetailedSocials)
          .sort((a, b) => a.priority - b.priority);

        return <ExpandedUserDetailed>{ ...user, socials };
      }),
      take(1)
    );
  }

  private expandSocials(users: UserDetailed[]): ExpandedUserDetailed[] {
    return users.map((user: UserDetailed) => {
      const userSocials = Object.entries(user.socials);
      const socials: DetailedSocialLink[] = userSocials
        .map(this.getDetailedSocials)
        .sort((a, b) => a.priority - b.priority);

      return { ...user, socials };
    });
  }

  private getDetailedSocials([socialName, userName]: [string, string]): DetailedSocialLink {
    return {
      priority: PRIORITY_ORDER[socialName as keyof typeof PRIORITY_ORDER],
      link: SOCIAL_PROFILE_LINKS_ROOT[socialName](userName),
      type: socialName as SOCIAL_ICONS
    };
  }
}
