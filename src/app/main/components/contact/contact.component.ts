import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserDetailed } from '../../main.model';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'epm-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private readonly user!: UserDetailed;

  constructor(
    private title: Title,
    private router: Router,
    private headerService: HeaderService
  ) {
    this.user = this.router.getCurrentNavigation()?.extras.state as UserDetailed;
  }

  ngOnInit() {
    if (this.user) {
      this.title.setTitle(`U-PAMERS | ${this.user.name} ${this.user.surname} profile`);
      this.headerService.addTitle(`${this.user.name} ${this.user.surname}`);
    }
  }
}
