import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'web',
      skills: [
        'Angular 17+',
        'TypeScript',
        'HTML5 & CSS3',
        'SCSS',
        'Angular Material',
        'Bootstrap 5',
        'Form.io',
        'Responsive Design'
      ]
    },
    {
      title: 'Backend Development',
      icon: 'dns',
      skills: [
        'C#',
        '.NET Core',
        'ASP.NET Web API',
        'RESTful APIs',
        'Microservices',
        'Azure Cloud'
      ]
    },
    {
      title: 'Database',
      icon: 'storage',
      skills: [
        'SQL Server',
        'T-SQL',
        'Stored Procedures',
        'Functions & Triggers',
        'Query Optimization',
        'Database Design'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: 'build',
      skills: [
        'Visual Studio 2022',
        'VS Code',
        'Git & GitHub',
        'Postman',
        'Azure DevOps',
        'JIRA & Confluence',
        'Kubernetes',
        'NUnit Testing'
      ]
    }
  ];
}
