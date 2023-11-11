import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  DestroyRef,
  Input,
  ViewChild,
  OnInit
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { INPUT_PLACEHOLDERS, INPUT_TYPES, SOCIAL_ICONS } from '../../../app.config';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface MaskConfig {
  symbol: string;
  quantity: number;
  regExp: RegExp;
}

@Component({
  selector: 'epm-input',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
  templateUrl: './epm-input.component.html',
  styleUrls: ['./epm-input.component.scss']
})
export class EpmInputComponent implements OnInit, AfterViewInit {
  @Input() control!: FormControl;
  @Input() labelPlaceholder = '';
  @Input() inputPlaceholder: INPUT_PLACEHOLDERS = INPUT_PLACEHOLDERS.None;
  @Input() type!: INPUT_TYPES;
  @Input() iconName: SOCIAL_ICONS = SOCIAL_ICONS.none;
  @Input() maskConfig?: MaskConfig;

  @ViewChild('wrapper') wrapperRef!: ElementRef;
  @ViewChild('epmInput') epmInputRef!: ElementRef;

  maskPlaceholder?: string = INPUT_PLACEHOLDERS.None;

  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;
  readonly inputPlaceholders: typeof INPUT_PLACEHOLDERS = INPUT_PLACEHOLDERS;

  constructor(
    private cdRef: ChangeDetectorRef,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    if (this.maskConfig) {
      const { symbol, quantity } = this.maskConfig!;
      this.maskPlaceholder = ''.padEnd(quantity, symbol);
    }
  }

  ngAfterViewInit(): void {
    this.wrapperRef.nativeElement.style.setProperty('--before-content', `url(assets/icons/${this.iconName}.svg)`);
    this.cdRef.detectChanges();

    if (this.maskConfig) {
      this.setMask();
    }
  }

  onToggleClick(type: string): void {
    this.epmInputRef.nativeElement.type =
      type === this.inputTypes.Password ? this.inputTypes.Text : this.inputTypes.Password;
  }

  private setMask(): void {
    const input = this.epmInputRef.nativeElement  as HTMLInputElement;

    this.control.valueChanges
      .pipe(
        tap(value => {
          const startCursorPosition = input.selectionStart!;
          this.setInputValue(value);
          const cursorPosition = this.setCursorPosition(startCursorPosition, value)
          input.setSelectionRange(cursorPosition, cursorPosition);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private replaceNonMatching(value: string, regExp: RegExp) {
    return value.replace(new RegExp(`[^${regExp.source}]`, 'g'), '');
  }

  private setInputValue(value: string) {
    const { symbol, quantity, regExp } = this.maskConfig!;
    let maskedNumbersValue = this.replaceNonMatching(value, regExp).padEnd(quantity, symbol).slice(0, quantity);
    maskedNumbersValue = maskedNumbersValue === this.maskPlaceholder ? '' : maskedNumbersValue;

    this.control.setValue(maskedNumbersValue, { emitEvent: false });
  }

  private setCursorPosition(startCursorPosition: number, value: string): number {
    const enteredCharacterIsNumeric = new RegExp(`^${this.maskConfig?.regExp.source}$`).test(value.charAt(startCursorPosition - 1));

    return enteredCharacterIsNumeric ? startCursorPosition : startCursorPosition - 1;
  }
}
