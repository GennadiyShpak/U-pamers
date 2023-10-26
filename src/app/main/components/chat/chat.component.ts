import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ChatForm, Message, User } from '../../main.model';
import { APP_ROUTER_NAME, BUTTON_THEMES, ICON_NAMES, INPUT_PLACEHOLDERS } from '../../../app.config';
import { HeaderService } from '../../../services/header.service';
import { EpmChatMessageComponent } from '../epm-chat-message/epm-chat-message.component';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { ToggleDisplayMessageTimePipe } from '../../../shared/pipes/toggle-display-message-time.pipe';
import { ToggleDisplayChatStartDayPipe } from '../../../shared/pipes/toggle-display-chat-start-day.pipe';
import { ChatStartDayPipe } from '../../../shared/pipes/chat-start-day.pipe';
import { CHAT_MOCK, USERS_MOCK } from '../../../../mocks/mock-data';

@Component({
  selector: 'epm-chat',
  standalone: true,
  imports: [
    CommonModule,
    EpmChatMessageComponent,
    EpmInputComponent,
    EpmButtonComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
    ToggleDisplayMessageTimePipe,
    ToggleDisplayChatStartDayPipe,
    ChatStartDayPipe
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('messageInput') messageInputRef!: EpmInputComponent;

  chatForm!: FormGroup<ChatForm>;
  // TODO change to id from http request
  userId = '2';
  messages: Message[] = CHAT_MOCK;
  interlocutor: User = USERS_MOCK[1];

  readonly chat: User = this.router.getCurrentNavigation()?.extras.state as User;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly iconNames: typeof ICON_NAMES = ICON_NAMES;
  readonly inputPlaceholders: typeof INPUT_PLACEHOLDERS = INPUT_PLACEHOLDERS;

  get message(): FormControl {
    return this.chatForm.controls.message;
  }

  constructor(
    private title: Title,
    private router: Router,
    private headerService: HeaderService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.setTitles();
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.focusOnInput();
    this.scrollToBottom();
  }

  onSend(): void {
    if (this.message.value) {
      // send message
      this.message.reset();
      this.focusOnInput();
    }
  }

  onOpenUser(user: User): void {
    this.router.navigateByUrl(`${APP_ROUTER_NAME.Main}/${APP_ROUTER_NAME.Contact}/${user.userId}`, { state: user });
  }

  trackByMessageId(_index: number, message: Message): string {
    return message.id;
  }

  private setTitles(): void {
    if (this.chat) {
      this.title.setTitle(`U-PAMERS | ${this.chat.name} ${this.chat.surname} chat`);
      this.headerService.addTitle(`${this.chat.name} ${this.chat.surname}`);
    }
  }

  private initForm(): void {
    this.chatForm = this.fb.group({
      message: new FormControl<string>('', { nonNullable: true })
    });
  }

  private scrollToBottom(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  private focusOnInput(): void {
    this.messageInputRef.epmInputRef.nativeElement.focus();
  }
}
