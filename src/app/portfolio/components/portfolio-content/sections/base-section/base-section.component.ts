import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-section.component.html',
  styleUrls: ['./base-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() sectionId: string = '';
}
