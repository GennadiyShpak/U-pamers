import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'epm-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  @Input() placeholder = '';
  @Input() value = '';
  @Input() type = 'text';
  @Input() icon = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('socials', { static: false }) socialsRef!: ElementRef;

  ngAfterViewInit(): void {
    if (this.icon) {
      const url = `url('../../../../assets/icons/${this.icon}_24x24.png')`;
      this.socialsRef.nativeElement.style.setProperty('--before-content', url);
    }
  }

  onValueChange(): void {
    this.valueChange.emit(this.value);
  }
}
