import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { APP_ROUTER_NAME } from '../../../app.config';

@Component({
  selector: 'epm-contact-edit-profile-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-edit-profile-link.component.html',
  styleUrls: ['./contact-edit-profile-link.component.scss']
})
export class ContactEditProfileLinkComponent {
  readonly editProfileLink: string = `/${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.ProfileSettings}`;
}
