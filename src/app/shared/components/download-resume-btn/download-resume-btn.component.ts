import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-download-resume-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-resume-btn.component.html',
  styleUrl: './download-resume-btn.component.scss'
})
export class DownloadResumeBtnComponent {
  @Input() variant: 'primary' | 'outline' | 'icon' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showIcon: boolean = true;

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/files/Monisha_Sekar_Resume.pdf';
    link.download = 'Monisha_Sekar_Resume.pdf';
    link.click();
  }
}
