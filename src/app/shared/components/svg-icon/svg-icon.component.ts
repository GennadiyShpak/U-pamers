import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SOCIAL_ICONS } from '../../../app.config';

@Component({
  selector: 'epm-svg-icon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input({ required: true }) svgIconName: SOCIAL_ICONS = SOCIAL_ICONS.none;
}
