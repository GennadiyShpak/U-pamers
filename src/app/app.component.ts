import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EpmHeaderComponent } from './shared/components/epm-header/epm-header.component';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, EpmHeaderComponent],
  standalone: true
})
export class AppComponent {}
