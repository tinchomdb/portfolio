import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portrait-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portrait-section.component.html',
  styleUrls: ['./portrait-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortraitSectionComponent {
  @Input() portraitImageUrl: string = '/assets/portrait.jpg';
  @Input() portraitAlt: string = 'Portrait';
}
