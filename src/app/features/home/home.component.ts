import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadResumeBtnComponent } from '../../shared/components/download-resume-btn/download-resume-btn.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DownloadResumeBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  displayedText = '';
  fullText = 'Full Stack Web Developer';
  typingSpeed = 100;

  techStack = [
    { name: 'Angular', icon: 'code' },
    { name: 'C#', icon: 'code' },
    { name: '.NET Core', icon: 'api' },
    { name: 'Azure', icon: 'cloud' },
    { name: 'SQL Server', icon: 'storage' }
  ];

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter(index = 0) {
    if (index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(index);
      setTimeout(() => this.typeWriter(index + 1), this.typingSpeed);
    }
  }

  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
