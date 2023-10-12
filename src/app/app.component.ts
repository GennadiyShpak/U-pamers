import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { EpmToasterComponent } from './shared/components/epm-toaster/epm-toaster.component';
import { TOASTER_CONTENT } from './app.config';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, EpmToasterComponent],
  standalone: true
})
export class AppComponent {
  readonly TOASTER_CONTENT = TOASTER_CONTENT;
}
