import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EpmHeaderComponent } from './shared/components/epm-header/epm-header.component';
import { EpmToasterComponent } from './shared/components/epm-toaster/epm-toaster.component';
import { UserSearchComponent } from './main/components/user-search/user-search.component';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, EpmHeaderComponent, EpmToasterComponent, UserSearchComponent],
  standalone: true
})
export class AppComponent {}
