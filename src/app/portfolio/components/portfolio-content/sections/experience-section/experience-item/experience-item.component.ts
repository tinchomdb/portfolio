import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../../../portfolio.model';
import { TagComponent } from '../../../../../components/shared/tag/tag.component';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, TagComponent],
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
