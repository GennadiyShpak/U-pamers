import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'epm-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {}
