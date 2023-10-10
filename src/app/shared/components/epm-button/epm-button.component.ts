import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'epm-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './epm-button.component.html',
  styleUrls: ['./epm-button.component.scss']
})
export class EpmButtonComponent {
  @Input() additionalStyles?: Partial<CSSStyleDeclaration>;
  @Input() isDisabled = false;
}
