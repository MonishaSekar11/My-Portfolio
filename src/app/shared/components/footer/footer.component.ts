import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/monisha-sekar00a49022a/',
      icon: 'linkedin',
      useSvg: true
    },
    {
      name: 'GitHub',
      url: 'https://github.com/monisha-sekar',
      icon: 'github',
      useSvg: true
    },
    {
      name: 'Email',
      url: 'mailto:monikrish1114@gmail.com',
      icon: 'email',
      useSvg: false
    }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
