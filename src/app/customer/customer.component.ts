import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  description: string =
    '      Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem  dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus  sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis  tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum  pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae  placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur  libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit  amet magna.';
  images: any[] = [
    {
      image: 'assets/images/c1.svg',
    },   {
      image: 'assets/images/c2.svg',
    },   {
      image: 'assets/images/c3.svg',
    },   {
      image: 'assets/images/c4.svg',
    },   {
      image: 'assets/images/c5.svg',
    },   {
      image: 'assets/images/c6.svg',
    },  
  ];
}
