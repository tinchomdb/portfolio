import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../../portfolio/portfolio.model';
import { NameSectionComponent } from './subcomponents/name-section/name-section.component';
import { NavMenuComponent } from './subcomponents/nav-menu/nav-menu.component';
import { SocialLinksComponent } from './subcomponents/social-links/social-links.component';
import { PortraitSectionComponent } from './subcomponents/portrait-section/portrait-section.component';

@Component({
  selector: 'app-portfolio-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NameSectionComponent,
    NavMenuComponent,
    SocialLinksComponent,
    PortraitSectionComponent,
  ],
  templateUrl: './portfolio-sidebar.component.html',
  styleUrls: ['./portfolio-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioSidebarComponent {
  @Input() name: string = '';
  @Input() subtitle: string = '';
  @Input() tagline: string = '';
  @Input() socialLinks: SocialLink[] = [];
  @Input() activeSection: string = '';
  @Output() navigate = new EventEmitter<{ section: string; sectionId: string }>();

  onNavigate(data: { section: string; sectionId: string }): void {
    this.navigate.emit(data);
  }
}
