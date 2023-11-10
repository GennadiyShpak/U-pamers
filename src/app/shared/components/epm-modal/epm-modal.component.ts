import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';

import { EpmButtonComponent } from '../epm-button/epm-button.component';
import { ModalConfig } from '../../../app.model';

@Component({
  selector: 'epm-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, EpmButtonComponent],
  templateUrl: './epm-modal.component.html',
  styleUrls: ['./epm-modal.component.scss']
})
export class EpmModalComponent {
  @Input() modalConfig!: ModalConfig;

  @Output() primaryButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() secondaryButton: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('modal') modal!: ElementRef;

  @HostListener('click', ['$event']) handleMouseEvent(event: MouseEvent): void {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  openModal(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    this.modal.nativeElement.showModal();
  }

  closeModal(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'auto');
    this.modal.nativeElement.close();
  }

  onPrimaryButtonClick(): void {
    this.closeModal();
    this.primaryButton.emit();
  }

  onSecondaryButtonClick(): void {
    this.closeModal();
    this.secondaryButton.emit();
  }
}
