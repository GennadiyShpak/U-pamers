import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from '../../main.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'epm-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  readonly chat: User = this.router.getCurrentNavigation()?.extras.state as User;

  constructor(
    private title: Title,
    private router: Router,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.setTitles();
  }

  private setTitles(): void {
    if (this.chat) {
      this.title.setTitle(`U-PAMERS | ${this.chat.name} ${this.chat.surname} chat`);
      this.headerService.addTitle(`${this.chat.name} ${this.chat.surname}`);
    }
  }
}
