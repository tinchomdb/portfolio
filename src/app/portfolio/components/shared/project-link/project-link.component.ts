import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService, type IconName, type IconData } from '../../../../services/icon.service';

type LinkVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-project-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-link.component.html',
  styleUrls: ['./project-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectLinkComponent {
  private readonly iconService = inject(IconService);

  @Input() href!: string;
  @Input() label: string = 'Link';
  @Input() variant: LinkVariant = 'primary';
  @Input() icon: IconName = 'external';

  get iconData(): IconData {
    return this.iconService.getIcon(this.icon);
  }

  get isExternal(): boolean {
    return this.href.startsWith('http') || this.href.startsWith('//');
  }
}
