import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  @Input() activeSection: string = '';
  @Output() navigate = new EventEmitter<{ section: string; sectionId: string }>();

  navItems: NavItem[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ];

  onNavigate(section: string, sectionId: string): void {
    this.navigate.emit({ section, sectionId });
  }
}
