import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HEADER_ICON_TYPE } from '../../../app.config';

@Component({
  selector: 'epm-navigation-icon',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-navigation-icon.component.html',
  styleUrls: ['./epm-navigation-icon.component.scss']
})
export class EpmNavigationIconComponent {
  @Input({ required: true }) iconType!: HEADER_ICON_TYPE;

  @Output() back: EventEmitter<void> = new EventEmitter<void>();

  protected readonly headerIconType = HEADER_ICON_TYPE;

  onBack(): void {
    this.back.emit();
  }
}
