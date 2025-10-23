import { Component, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorService } from '../../services/cursor.service';

@Component({
  selector: 'app-cursor-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="cursor-container"
      [style.left.px]="cursorPosition().x"
      [style.top.px]="cursorPosition().y"
    >
      <!-- Stylish pointer arrow -->
      <svg class="cursor-pointer" viewBox="0 0 24 24" width="24" height="24">
        <!-- Arrow path -->
        <path class="pointer-arrow" d="M 3 3 L 3 19 L 10 12 L 18 12 L 3 3 Z" fill="currentColor" />
        <!-- Glow effect -->
        <path
          class="pointer-glow"
          d="M 3 3 L 3 19 L 10 12 L 18 12 L 3 3 Z"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>

      <!-- Trailing glow when hovering -->
      <div class="cursor-aura" [class.hovering]="hoverScale() > 1"></div>
    </div>
  `,
  styleUrl: './cursor-effect.component.scss',
})
export class CursorEffectComponent implements OnInit, OnDestroy {
  constructor(private cursorService: CursorService) {}

  get cursorPosition() {
    return this.cursorService.cursorPosition;
  }

  get hoverScale() {
    return this.cursorService.hoverScale;
  }

  get isHovering() {
    return this.cursorService.isHovering;
  }

  ngOnInit(): void {
    // Hide default cursor on the body
    document.body.style.cursor = 'none';
  }

  ngOnDestroy(): void {
    // Restore default cursor
    document.body.style.cursor = 'auto';
  }
}
