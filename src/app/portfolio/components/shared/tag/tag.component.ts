import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input() text: string = '';
  @Input() size: 'sm' | 'xs' = 'sm';
}
