import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../../../app/portfolio/portfolio.model';
import { ProjectItemComponent } from './project-item/project-item.component';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent, BaseSectionComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  @Input() projects: Project[] = [];
}
