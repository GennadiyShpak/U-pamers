import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { INPUT_PLACEHOLDERS, INPUT_TYPES, SOCIAL_ICONS } from '../../../app.config';

@Component({
  selector: 'epm-input',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './epm-input.component.html',
  styleUrls: ['./epm-input.component.scss']
})
export class EpmInputComponent implements AfterViewInit {
  @Input() control!: FormControl;
  @Input() labelPlaceholder = '';
  @Input() inputPlaceholder: INPUT_PLACEHOLDERS = INPUT_PLACEHOLDERS.None;
  @Input() type!: INPUT_TYPES;
  @Input() iconName: SOCIAL_ICONS = SOCIAL_ICONS.none;
  @Input() errorMessage = '';

  @ViewChild('wrapper', { static: false }) wrapperRef!: ElementRef;
  @ViewChild('epmInput', { static: false }) epmInputRef!: ElementRef;

  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.wrapperRef.nativeElement.style.setProperty('--before-content', `url(assets/icons/${this.iconName}.svg)`);
    this.cdRef.detectChanges();
  }

  onToggleClick(type: string): void {
    this.epmInputRef.nativeElement.type =
      type === this.inputTypes.Password ? this.inputTypes.Text : this.inputTypes.Password;
  }
}
