import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience = {
    company: 'Brandmuscle India Pvt Ltd',
    location: 'Bangalore, India',
    position: 'Software Engineer',
    duration: 'August 2022 - Present',
    years: '3.7 years',
    responsibilities: [
      'Developed user requirements in Agile methodology using C# and Angular',
      'Designed and implemented database objects (procedures, functions, triggers, views)',
      'Created optimized SQL queries for integration with external applications',
      'Prepared test cases and conducted UAT demonstrations',
      'Mentored colleagues on application workflow and best practices',
      'Managed end-to-end testing and production deployments',
      'Collaborated with cross-functional teams to deliver high-quality solutions'
    ]
  };
}
