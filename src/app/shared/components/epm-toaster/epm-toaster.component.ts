import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { COMMON_ICONS } from '../../../app.config';

@Component({
  selector: 'epm-toaster',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-toaster.component.html',
  styleUrls: ['./epm-toaster.component.scss']
})
export class EpmToasterComponent {
  @Input() title = '';

  private isHidden = false;

  readonly COMMON_ICONS = COMMON_ICONS;

  @HostBinding('class.hidden') get class() {
    return this.isHidden;
  }

  onClick(): void {
    this.isHidden = true;
  }
}
