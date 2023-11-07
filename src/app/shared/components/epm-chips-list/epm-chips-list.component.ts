import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { INTEREST_CHIPS_NAMES } from '../../../app.config';
import { EpmChipsComponent } from '../epm-chips/epm-chips.component';
import { IsPrimitiveInArrayPipe } from '../../pipes/is-primitive-in-array.pipe';

@Component({
  selector: 'epm-chips-list',
  standalone: true,
  imports: [CommonModule, EpmChipsComponent, IsPrimitiveInArrayPipe],
  templateUrl: './epm-chips-list.component.html',
  styleUrls: ['./epm-chips-list.component.scss']
})
export class EpmChipsListComponent {
  @Input({ required: true }) interests!: string[];
  @Output() selectedInterests: EventEmitter<string[]> = new EventEmitter<string[]>();

  readonly interestChipsNames: typeof INTEREST_CHIPS_NAMES = INTEREST_CHIPS_NAMES;

  onStatusChange(chipsName: string): void {
    if (this.interests.includes(chipsName)) {
      this.interests = this.interests.filter(el => el !== chipsName);
    } else {
      this.interests = [...this.interests, chipsName];
    }
    this.selectedInterests.emit(this.interests);
  }
}
