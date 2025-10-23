import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../../../../portfolio.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
  @Input() experience!: Experience;

  isDescriptionArray(description: string | string[]): boolean {
    return Array.isArray(description);
  }
}
