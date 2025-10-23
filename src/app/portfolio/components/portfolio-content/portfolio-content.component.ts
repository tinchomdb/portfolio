import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Project } from '../../../portfolio/portfolio.model';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';

@Component({
  selector: 'app-portfolio-content',
  standalone: true,
  imports: [
    CommonModule,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
  ],
  templateUrl: './portfolio-content.component.html',
  styleUrls: ['./portfolio-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioContentComponent {
  @Input() aboutText: string[] = [];
  @Input() experiences: Experience[] = [];
  @Input() projects: Project[] = [];
}
