import { Pipe, PipeTransform } from '@angular/core';

import { DEFAULT_AVATAR } from '../../app.config';

@Pipe({
  name: 'setUserAvatar',
  standalone: true
})
export class SetUserAvatarPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value : DEFAULT_AVATAR;
  }
}
