import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ClientComponent } from './client/client.component';
import { CommunityComponent } from './community/community.component';
import { PixelComponent } from './pixel/pixel.component';
import { AchievementComponent } from './achievement/achievement.component';
import { CalenderComponent } from './calender/calender.component';
import { CustomerComponent } from './customer/customer.component';
import { CommunityUpdateComponent } from './community-update/community-update.component';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    ClientComponent,
    CommunityComponent,
    PixelComponent,
    AchievementComponent,
    CalenderComponent,
    CustomerComponent,
    CommunityUpdateComponent,
    DemoComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nexcent';
}
