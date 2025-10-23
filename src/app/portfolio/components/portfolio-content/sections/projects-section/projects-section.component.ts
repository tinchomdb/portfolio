import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../../../app/portfolio/portfolio.model';
import { ProjectItemComponent } from './subcomponents/project-item/project-item.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  @Input() projects: Project[] = [];
}
