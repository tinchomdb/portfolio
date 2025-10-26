import { Component, DestroyRef, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursorService } from '../../../services/cursor.service';

@Component({
  selector: 'app-cursor-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (cursorService.isInitialized()) {
    <div
      class="cursor-container"
      [style.left.px]="cursorService.cursorPosition().x"
      [style.top.px]="cursorService.cursorPosition().y"
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
      <div class="cursor-aura" [class.hovering]="cursorService.hoverScale() > 1"></div>
    </div>
    }
  `,
  styleUrl: './cursor-effect.component.scss',
})
export class CursorEffectComponent {
  readonly cursorService = inject(CursorService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Hide default cursor and restore on destroy
    effect(() => {
      if (this.cursorService.isInitialized()) {
        document.body.style.cursor = 'none';

        this.destroyRef.onDestroy(() => {
          document.body.style.cursor = 'auto';
        });
      }
    });
  }
}
