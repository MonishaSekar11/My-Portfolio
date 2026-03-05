import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Multi-Language Translation System',
      description: 'Developed a comprehensive translation system supporting 8+ languages for international clients. Implemented resource messages architecture enabling users to interact with the application in their native language, enhancing global accessibility.',
      technologies: ['Angular', 'C#', 'Resource Messages', '.NET Core', 'i18n'],
      achievements: [
        'Successfully implemented support for 8+ languages',
        'Built dynamic language switching without page reload',
        'Improved user engagement across global markets',
        'Designed scalable resource management system'
      ],
      icon: 'translate'
    },
    {
      title: 'Custom Forms Integration',
      description: 'Integrated Form.io with ASPX to create dynamic, customizable forms for enterprise applications. Developed seamless integration between modern form builder and legacy ASP.NET infrastructure.',
      technologies: ['Form.io', 'ASPX', 'C#', 'JavaScript', 'JSON Schema'],
      achievements: [
        'Integrated Form.io framework with existing ASPX applications',
        'Enabled drag-and-drop form building for non-technical users',
        'Reduced form development time by 60%',
        'Built custom validation and submission handlers'
      ],
      icon: 'description'
    },
    {
      title: 'Digital Business Card',
      description: 'A comprehensive digital business card system that generates QR codes using user information. Designed for non-technical users to create and share contact details digitally, replacing traditional visiting cards.',
      technologies: ['Angular', 'C#', 'SQL Server', 'Form.io', 'QR Code'],
      achievements: [
        'Built mobile-responsive interface for seamless user experience',
        'Designed database architecture with stored procedures and triggers',
        'Created eco-friendly modern solution for business professionals'
      ],
      icon: 'qr_code'
    },
    {
      title: 'Rush Order Management',
      description: 'Redesigned traditional lead time system to support flexible order scheduling. Implemented dynamic date picker enabling customers to select preferred delivery dates instead of fixed timelines.',
      technologies: ['C#', 'Angular', 'Angular Material', 'TypeScript'],
      achievements: [
        'Improved order management efficiency by 30%',
        'Enhanced customer satisfaction through user-friendly design',
        'Increased platform usability with flexible scheduling'
      ],
      icon: 'schedule'
    },
    {
      title: 'POP Process (Point of Purchase)',
      description: 'Built customization platform for printed marketing materials with complete control over product attributes. Developed REST APIs bridging clients and print vendors with automated Azure notifications.',
      technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server', 'REST API'],
      achievements: [
        'Streamlined customization process for marketing materials',
        'Implemented Azure-based automated notification system',
        'Reduced production errors through intuitive design interface'
      ],
      icon: 'print'
    }
  ];
}
