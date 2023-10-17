import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { INPUT_TYPES, SOCIAL_ICONS } from '../../../app.config';

@Component({
  selector: 'epm-input',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './epm-input.component.html',
  styleUrls: ['./epm-input.component.scss']
})
export class EpmInputComponent implements OnInit, AfterViewInit {
  @Input() control!: FormControl;
  @Input() placeholder = '';
  @Input() type!: INPUT_TYPES;
  @Input() iconName: SOCIAL_ICONS = SOCIAL_ICONS.none;
  @Input() errorMessage = '';

  @ViewChild('wrapper', { static: false }) wrapperRef!: ElementRef;
  @ViewChild('epmInput', { static: false }) epmInputRef!: ElementRef;

  isPasswordType = false;

  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  ngOnInit(): void {
    this.isPasswordType = this.type === this.inputTypes.Password;
  }

  ngAfterViewInit(): void {
    if (this.iconName) {
      const iconUrl = `url('assets/icons/${this.iconName}.svg')`;
      this.wrapperRef.nativeElement.style.setProperty('--before-content', iconUrl);
    }
  }

  onToggleClick(): void {
    this.epmInputRef.nativeElement.type =
      this.epmInputRef.nativeElement.type === this.inputTypes.Password
        ? this.inputTypes.Text
        : this.inputTypes.Password;
  }
}
