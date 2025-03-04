import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  imports: [],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  communityCards:any[] = [
    {
      image: 'assets/images/people.svg',
      heading: 'Membership Organisations',
      text: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      image: 'assets/images/national.svg',
      heading: 'National Associations',
      text: 'Our membership management software provides full automation of membership renewals and payments',
    },
    {
      image: 'assets/images/group.svg',
      heading: 'Clubs And Groups',
      text: 'Our membership management software provides full automation of membership renewals and payments',
    },
  ];
}
