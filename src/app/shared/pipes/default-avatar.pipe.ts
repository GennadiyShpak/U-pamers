import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultAvatar',
  standalone: true
})
export class DefaultAvatarPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value : '/assets/images/default-avatar.svg';
  }
}
