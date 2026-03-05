import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { value: '3.7+', label: 'Years Experience' },
    { value: '5', label: 'Major Projects' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '1', label: 'Happy Company' }
  ];
}
