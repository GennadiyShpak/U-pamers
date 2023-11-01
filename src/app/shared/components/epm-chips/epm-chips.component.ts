import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Chips, InterestChips } from '../../../app.model';

@Component({
  selector: 'epm-chips',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './epm-chips.component.html',
  styleUrls: ['./epm-chips.component.scss']
})
export class EpmChipsComponent implements OnInit {
  @Input() chips!: Chips;

  @Output() toggleChipsStatus: EventEmitter<Chips> = new EventEmitter<Chips>();

  description!: string;
  interestChips!: InterestChips;

  ngOnInit(): void {
    typeof this.chips.chipsData === 'string'
      ? (this.description = this.chips.chipsData)
      : (this.interestChips = this.chips.chipsData);
  }

  onIsEditableClick(): void {
    this.chips = { ...this.chips, isActive: !this.chips.isActive };
    this.toggleChipsStatus.emit(this.chips);
  }
}
