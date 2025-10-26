import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectDescription } from '../../../../../portfolio.model';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { TagComponent } from '../../../../../components/shared/tag/tag.component';
import { ProjectLinkComponent } from '../../../../shared/project-link/project-link.component';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule, ProjectGalleryComponent, TagComponent, ProjectLinkComponent],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  @Input() project!: Project;

  isComplexDescription(
    description: string | ProjectDescription
  ): description is ProjectDescription {
    return typeof description === 'object' && 'overview' in description;
  }

  isStringContent(content: string | string[]): boolean {
    return typeof content === 'string';
  }
}
