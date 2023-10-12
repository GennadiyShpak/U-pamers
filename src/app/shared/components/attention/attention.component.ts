import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'epm-attention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.scss'],
  animations: [
    trigger('slideUp', [
      state('shown', style({})),
      state(
        'closed',
        style({
          display: 'none',
          height: 0
        })
      ),
      transition('shown => closed', [animate('0.3s')])
    ])
  ]
})
export class AttentionComponent {
  @Input() description = '';
  @Input() title = '';

  private isShown = true;

  @HostBinding('@slideUp') get slideUp() {
    return this.isShown ? 'shown' : 'closed';
  }

  onClick(): void {
    this.isShown = false;
  }
}
