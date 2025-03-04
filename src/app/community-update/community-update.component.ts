import { Component } from '@angular/core';

@Component({
  selector: 'app-community-update',
  imports: [],
  templateUrl: './community-update.component.html',
  styleUrl: './community-update.component.scss'
})
export class CommunityUpdateComponent {
  communityUpdates = [
    {
      image: 'assets/images/u1.svg',
      text: 'Creating Streamlined <br>Safeguarding Processes with <br>OneRen',
      buttonImage: 'assets/images/btn.svg'
    },
    {
      image: 'assets/images/u2.svg',
      text: 'What are your safeguarding responsibilities and how can you manage them?',
      buttonImage: 'assets/images/btn.svg'
    },
    {
      image: 'assets/images/u3.svg',
      text: 'Revamping the Membership Model with Triathlon <br>Australia',
      buttonImage: 'assets/images/btn.svg'
    }
  ];
}
