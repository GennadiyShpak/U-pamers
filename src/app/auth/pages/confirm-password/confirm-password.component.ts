import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { CognitoService } from '../../../services/cognito.service';
import { APP_ROUTER_NAME } from '../../../app.config';
import { ConfirmPasswordData } from '../../auth.model';

@Component({
  selector: 'epm-confirm-password',
  standalone: true,
  imports: [CommonModule, EpmButtonComponent, EpmInputComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export default class ConfirmPasswordComponent implements OnInit {
  confirmForm!: FormGroup<ConfirmPasswordData>;

  get code(): FormControl<string> {
    return this.confirmForm.get('code') as FormControl<string>;
  }

  get email(): FormControl<string> {
    return this.confirmForm.get('email') as FormControl<string>;
  }

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.confirmForm = this.fb.group({
      code: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  onConfirmPassword(): void {
    const confirmFormValue = {
      code: this.code.value,
      email: this.email.value
    };
    this.cognitoService
      .confirmAuth(confirmFormValue)
      .then(() => {
        this.router.navigateByUrl(`/auth/${APP_ROUTER_NAME.LogIn}`);
      })
      .catch(() => {
        this.router.navigateByUrl(`/${APP_ROUTER_NAME.NotFound}`);
      });
  }
}
