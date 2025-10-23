import { Injectable, signal } from '@angular/core';

export interface CursorPosition {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  cursorPosition = signal<CursorPosition>({ x: 0, y: 0 });
  isHovering = signal(false);
  hoverScale = signal(1);

  constructor() {
    this.initCursorTracking();
  }

  private initCursorTracking(): void {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.cursorPosition.set({ x: e.clientX, y: e.clientY });
    });

    document.addEventListener('mouseenter', () => {
      this.isHovering.set(true);
    });

    document.addEventListener('mouseleave', () => {
      this.isHovering.set(false);
      this.hoverScale.set(1);
    });

    // Detect hover over interactive elements
    document.addEventListener('mouseover', (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('interactive') ||
        target.closest('a') ||
        target.closest('button');

      this.hoverScale.set(isInteractive ? 1.5 : 1);
    });

    document.addEventListener('mouseout', () => {
      this.hoverScale.set(1);
    });
  }
}
