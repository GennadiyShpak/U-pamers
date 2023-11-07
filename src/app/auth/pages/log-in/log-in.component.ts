import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_TYPES } from '../../../app.config';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, tap } from 'rxjs';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { LoginData, LoginForm } from '../../auth.model';
import { CognitoService } from '../../../services/cognito.service';

@Component({
  selector: 'epm-log-in',
  standalone: true,
  imports: [CommonModule, RouterLink, EpmInputComponent, EpmButtonComponent, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup<LoginForm>;

  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;
  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly inputTypes: typeof INPUT_TYPES = INPUT_TYPES;

  get email(): FormControl {
    return this.loginForm.controls.email;
  }
  get password(): FormControl {
    return this.loginForm.controls.password;
  }

  get isFormValid(): boolean {
    return this.loginForm.valid;
  }

  constructor(
    private router: Router,
    private fb: NonNullableFormBuilder,
    private cognitoService: CognitoService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  onLogIn(): void {
    const userCredentials = this.loginForm.value as LoginData;
    this.cognitoService
      .signIn(userCredentials)
      .pipe(
        tap(() => this.router.navigateByUrl(`/${this.appRoutes.Main}`)),
        catchError(() => this.router.navigateByUrl(`/${APP_ROUTER_NAME.NotFound}`))
      )
      .subscribe();
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', { validators: [Validators.required] }],
      password: ['', { validators: [Validators.required] }]
    });
  }
}
