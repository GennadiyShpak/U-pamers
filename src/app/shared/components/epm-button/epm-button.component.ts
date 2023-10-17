import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ICON_NAMES } from '../../../app.config';

@Component({
  selector: 'epm-button',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-button.component.html',
  styleUrls: ['./epm-button.component.scss']
})
export class EpmButtonComponent {
  @Input() additionalStyles?: Partial<CSSStyleDeclaration>;
  @Input() isDisabled = false;
  @Input() iconName?: ICON_NAMES;
}
