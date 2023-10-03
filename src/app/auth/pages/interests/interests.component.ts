import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-interests',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent {
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
}
