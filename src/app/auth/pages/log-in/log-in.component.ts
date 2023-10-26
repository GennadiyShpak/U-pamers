import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_ROUTER_NAME, BUTTON_THEMES, INPUT_TYPES } from '../../../app.config';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { LoginForm } from '../../auth.model';

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

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  onLogIn(): void {
    this.router.navigateByUrl(`/${this.appRoutes.Main}`);
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group<LoginForm>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }
}
