import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  client: string = 'Our Clients';
  clients: string = 'We have been working with some Fortune 500+ clients';
  image1: string = 'assets/images/image1.svg';
  image2: string = 'assets/images/image2.svg';
  image3: string = 'assets/images/image3.svg';
  image4: string = 'assets/images/image4.svg';
  image5: string = 'assets/images/image5.svg';
  image6: string = 'assets/images/image6.svg';
  image7: string = 'assets/images/image7.svg';
}
