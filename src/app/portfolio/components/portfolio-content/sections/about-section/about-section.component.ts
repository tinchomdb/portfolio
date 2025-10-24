import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSectionComponent } from '../base-section/base-section.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, BaseSectionComponent],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  @Input() aboutText: string[] = [];
}
