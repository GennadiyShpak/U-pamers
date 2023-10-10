import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SOCIAL_ICONS } from '../../../app.config';

@Component({
  selector: 'epm-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './epm-input.component.html',
  styleUrls: ['./epm-input.component.scss']
})
export class EpmInputComponent implements AfterViewInit {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() icon: SOCIAL_ICONS = SOCIAL_ICONS.none;

  @Output() inputValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('wrapper', { static: false }) wrapperRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.icon) {
      const iconUrl = `url('../../../../${this.icon}'`;
      this.wrapperRef.nativeElement.style.setProperty('--before-content', iconUrl);
    }
  }

  onValueChange(inputValue: string): void {
    this.inputValue.emit(inputValue);
  }
}
