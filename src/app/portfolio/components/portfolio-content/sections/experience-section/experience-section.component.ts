import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../../../portfolio.model';
import { ExperienceItemComponent } from './subcomponents/experience-item/experience-item.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, ExperienceItemComponent],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  @Input() experiences: Experience[] = [];
}
