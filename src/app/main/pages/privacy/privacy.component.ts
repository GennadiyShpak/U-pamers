import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, takeUntil, tap } from 'rxjs';

import { PrivacyStatusForm } from '../../main.model';
import { DISABLED_PRIVACY_ITEMS } from '../../main.config';

@Component({
  selector: 'epm-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export default class PrivacyComponent implements OnInit {
  privacyStatusForm!: FormGroup<PrivacyStatusForm>;

  private destroyed: Subject<void> = new Subject<void>();
  private readonly destroyed$: Observable<void> = this.destroyed.asObservable();

  get account(): FormControl {
    return this.privacyStatusForm.get('account') as FormControl;
  }

  get age(): FormControl {
    return this.privacyStatusForm.get('privacyItems.age') as FormControl;
  }

  get location(): FormControl {
    return this.privacyStatusForm.get('privacyItems.location') as FormControl;
  }

  get description(): FormControl {
    return this.privacyStatusForm.get('privacyItems.description') as FormControl;
  }

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.initPrivacyStatusForm();
    this.initAccountChangesSubscription();
  }

  private initPrivacyStatusForm(): void {
    this.privacyStatusForm = this.fb.group({
      account: [false],
      privacyItems: this.fb.group({
        age: [false],
        location: [false],
        description: [false]
      })
    });
  }

  private initAccountChangesSubscription(): void {
    this.account.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        tap(() => {
          this.handlePrivacyValueChange(this.account.value);
        })
      )
      .subscribe();
  }

  private handlePrivacyValueChange(isChecked: boolean): void {
    if (isChecked) {
      this.privacyStatusForm.get('privacyItems')?.setValue(DISABLED_PRIVACY_ITEMS);
      this.privacyStatusForm.get('privacyItems')?.disable();
    } else {
      this.privacyStatusForm.get('privacyItems')?.enable();
    }
  }
}
