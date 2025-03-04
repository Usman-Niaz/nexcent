import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  lesson: string = 'Lessons and insights';
  year: string = ' from 8 years';
  text: string =
    'Where to grow your business as a photographer: site or social media?';
  image: string = 'assets/images/Illustration.svg';
}
