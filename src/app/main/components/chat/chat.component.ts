import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChatLastMessage } from '../../main.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'epm-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private readonly chat!: ChatLastMessage;

  constructor(
    private title: Title,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.chat = this.router.getCurrentNavigation()?.extras.state as ChatLastMessage;
  }

  ngOnInit() {
    if (this.chat) {
      this.title.setTitle(`U-PAMERS | ${this.chat.name} ${this.chat.surname} chat`);
      this.headerService.addTitle(`${this.chat.name} ${this.chat.surname}`);
    }
  }
}
