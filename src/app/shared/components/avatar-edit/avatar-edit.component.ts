import { Component, ElementRef, Signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ImageCroppedEvent, ImageCropperModule, ImageTransform } from 'ngx-image-cropper';
import 'hammerjs';

import { EpmButtonComponent } from '../epm-button/epm-button.component';
import { APP_ROUTER_NAME } from '../../../app.config';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'epm-avatar-edit',
  standalone: true,
  imports: [CommonModule, EpmButtonComponent, ImageCropperModule],
  templateUrl: './avatar-edit.component.html',
  styleUrls: ['./avatar-edit.component.scss']
})
export default class AvatarEditComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  transform: ImageTransform = {};

  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly imageChangedEvent: Signal<Event> = this.authService.imageChangedEvent;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  imageCropped(event: ImageCroppedEvent): void {
    this.authService.setCroppedImage(event);
  }

  onSavePhoto(): void {
    this.setUserAvatarDraft();
    this.authService.setFileEventDraft(this.authService.imageChangedEvent());
    this.router.navigateByUrl(`/${this.appRoutes.Auth}/${this.appRoutes.SignUp}`);
  }

  onChangePhoto(): void {
    this.fileInput.nativeElement.click();
  }

  fileChangeEvent(event: Event): void {
    if ((event.target as HTMLInputElement).value) {
      this.authService.setImageChangeEvent(event);
    }
  }

  private setUserAvatarDraft(): void {
    const reader: FileReader = new FileReader();

    reader.readAsDataURL(this.authService.croppedImage().blob!);
    reader.onload = () => this.authService.setUserAvatarDraft(reader.result!);
  }
}
