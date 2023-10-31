import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { EpmInputComponent } from '../../../shared/components/epm-input/epm-input.component';
import { EpmButtonComponent } from '../../../shared/components/epm-button/epm-button.component';
import { APP_ROUTER_NAME, BUTTON_THEMES } from '../../../app.config';
import { AccountDetailsForm } from '../../main.model';

@Component({
  selector: 'epm-details',
  standalone: true,
  imports: [CommonModule, RouterLink, EpmInputComponent, EpmButtonComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export default class DetailsComponent implements OnInit {
  accountDetailsForm!: FormGroup<AccountDetailsForm>;

  readonly buttonThemes: typeof BUTTON_THEMES = BUTTON_THEMES;
  readonly appRoutes: typeof APP_ROUTER_NAME = APP_ROUTER_NAME;

  get email(): FormControl {
    return this.accountDetailsForm.get('email') as FormControl;
  }

  get firstName(): FormControl {
    return this.accountDetailsForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.accountDetailsForm.get('lastName') as FormControl;
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initAccountDetailsForm();
  }

  private initAccountDetailsForm(): void {
    this.accountDetailsForm = this.fb.group<AccountDetailsForm>({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }

  onSaveUpdates(): void {
    //TODO add submit account details logic

    this.router.navigateByUrl(`/${this.appRoutes.Main}/${this.appRoutes.ProfileSettings}`);
  }
}
