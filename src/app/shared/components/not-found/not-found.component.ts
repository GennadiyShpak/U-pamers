import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export default class NotFoundComponent {
  readonly linkTo: string[] = ['/', APP_ROUTER_NAME.Main];
}
