import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-credentials',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
}
