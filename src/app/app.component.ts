import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { AttentionComponent } from './shared/components/attention/attention.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'epm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, AttentionComponent, NgClass],
  standalone: true
})
export class AppComponent {}
