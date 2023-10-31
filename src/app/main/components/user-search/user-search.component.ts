import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME, ICON_NAMES, INPUT_TYPES } from '../../../app.config';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmChipsComponent } from '../../../shared/components/epm-chips/epm-chips.component';
import { Chips } from '../../../app.model';
import { filter, tap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'epm-user-search',
  standalone: true,
  imports: [CommonModule, EpmButtonComponent, EpmChipsComponent],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  chipsList: Chips[] = [];
  isScrolled = false;
  inputType: typeof INPUT_TYPES = INPUT_TYPES;
  iconName: typeof ICON_NAMES = ICON_NAMES;

  readonly routerNames: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  @HostBinding('class.hidden') isSearchHidden = true;

  @HostListener('window:scroll') onScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setupSearchPanelVisibility();
  }

  private setupSearchPanelVisibility(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.isSearchHidden = this.router.url !== `/${this.routerNames.Main}/${this.routerNames.Contact}`;
        })
      )
      .subscribe();
  }
}
