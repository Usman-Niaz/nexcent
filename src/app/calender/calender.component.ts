import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  imports: [],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.scss',
})
export class CalenderComponent {
  image: string = 'assets/images/pana.svg';
  para: string =
    '  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a  magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea  dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In  euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in  nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,  finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus  ipsum id gravida.';
}
