import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadResumeBtnComponent } from '../../shared/components/download-resume-btn/download-resume-btn.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, DownloadResumeBtnComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'location_on',
      title: 'Location',
      value: 'Bangalore, India',
      link: null
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+91 6374076035',
      link: 'tel:+916374076035'
    },
    {
      icon: 'email',
      title: 'Email',
      value: 'monikrish1114@gmail.com',
      link: 'mailto:monikrish1114@gmail.com'
    }
  ];

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
    }
  ];
}
