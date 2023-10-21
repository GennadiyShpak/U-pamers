import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ExpandedUserDetailed } from '../../main.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'epm-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  readonly user: ExpandedUserDetailed = this.router.getCurrentNavigation()?.extras.state as ExpandedUserDetailed;

  constructor(
    private title: Title,
    private router: Router,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.setTitles();
  }

  private setTitles(): void {
    if (this.user) {
      this.title.setTitle(`U-PAMERS | ${this.user.name} ${this.user.surname} profile`);
      this.headerService.addTitle(`${this.user.name} ${this.user.surname}`);
    }
  }
}
