import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent],
  standalone: true
})
export class AppComponent {}
