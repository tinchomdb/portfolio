import { Injectable, signal, DestroyRef, inject } from '@angular/core';

export interface CursorPosition {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root',
})
export class CursorService {
  private readonly destroyRef = inject(DestroyRef);

  readonly cursorPosition = signal<CursorPosition>({ x: 0, y: 0 });
  readonly isHovering = signal(false);
  readonly hoverScale = signal(1);
  readonly isInitialized = signal(false);

  constructor() {
    if (this.isTouchDevice()) {
      return;
    }

    this.initCursorTracking();
    this.isInitialized.set(true);
  }

  private isTouchDevice(): boolean {
    return window.matchMedia('(pointer:coarse)').matches;
  }

  private initCursorTracking(): void {
    const onMouseMove = (e: MouseEvent): void => {
      this.cursorPosition.set({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (): void => {
      this.isHovering.set(true);
    };

    const onMouseLeave = (): void => {
      this.isHovering.set(false);
      this.hoverScale.set(1);
    };

    const onMouseOver = (e: Event): void => {
      const target = e.target as HTMLElement;
      const isInteractive = this.isInteractiveElement(target);
      this.hoverScale.set(isInteractive ? 1.5 : 1);
    };

    const onMouseOut = (): void => {
      this.hoverScale.set(1);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Clean up listeners on destroy
    this.destroyRef.onDestroy(() => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    });
  }

  private isInteractiveElement(element: HTMLElement): boolean {
    return (
      element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.classList.contains('interactive') ||
      !!element.closest('a') ||
      !!element.closest('button')
    );
  }
}
