import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLink } from '../../../portfolio.model';
import { IconService, IconData } from '../../../../services/icon.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent {
  private readonly iconService = inject(IconService);

  @Input() socialLinks: SocialLink[] = [];

  getIcon(iconName: string): IconData {
    return this.iconService.getIcon(iconName as any);
  }
}
