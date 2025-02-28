import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true, // ✅ Standalone component
  imports: [FontAwesomeModule], // ✅ Import FontAwesomeModule directly
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faArrowRight = faArrowRight; // Store the icon
}
