import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { INTEREST_CHIPS_NAMES } from '../../../app.config';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent implements OnInit {
  @Input() chips!: string;
  @Input() isEditable = false;
  @Input() isActive = false;

  @Output() editChipsStatus: EventEmitter<string> = new EventEmitter<string>();

  iconName!: string;
  iconFileName!: string;

  ngOnInit(): void {
    this.getChipsIconURL(this.chips);
    this.getEditIconURL();
  }

  onIsEditableClick($event: MouseEvent, chipsName: string): void {
    if (!this.isEditable) return;

    this.isActive = !this.isActive;
    this.getEditIconURL();
    this.editChipsStatus.emit(chipsName);
  }

  private getChipsIconURL(iconName: string): void {
    this.iconName = INTEREST_CHIPS_NAMES.includes(iconName) ? `/assets/icons/${iconName.toLowerCase()}.svg` : '';
  }

  private getEditIconURL(): void {
    this.iconFileName = this.isActive ? '/assets/icons/cross.svg' : '/assets/icons/plus.svg';
  }
}
