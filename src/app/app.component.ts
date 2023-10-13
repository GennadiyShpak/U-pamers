import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { EpmToasterComponent } from './shared/components/epm-toaster/epm-toaster.component';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, EpmToasterComponent],
  standalone: true
})
export class AppComponent {}
