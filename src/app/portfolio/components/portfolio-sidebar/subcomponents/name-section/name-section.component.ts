import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameSectionComponent {
  @Input() name: string = '';
  @Input() subtitle: string = '';
  @Input() tagline: string = '';
}
