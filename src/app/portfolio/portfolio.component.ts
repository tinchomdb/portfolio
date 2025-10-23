import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  DOCUMENT,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES, PROJECTS, PORTFOLIO_DATA } from './portfolio.constants';
import { PortfolioSidebarComponent } from './components/portfolio-sidebar/portfolio-sidebar.component';
import { PortfolioContentComponent } from './components/portfolio-content/portfolio-content.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioSidebarComponent, PortfolioContentComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent implements AfterViewInit, OnDestroy {
  private document = inject(DOCUMENT);
  activeSection = signal<string>('about');
  private intersectionObserver: IntersectionObserver | null = null;
  private isUserScrolling = false;
  private scrollTimeout: any;

  // Data
  readonly portfolioData = PORTFOLIO_DATA;
  readonly experiences = EXPERIENCES;
  readonly projects = PROJECTS;

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
    clearTimeout(this.scrollTimeout);
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && this.isUserScrolling) {
          const sectionId = entry.target.id;
          this.activeSection.set(sectionId);
        }
      });
    }, options);

    // Observe all section elements
    const sections = this.document.querySelectorAll('.content-section');
    sections.forEach((section) => this.intersectionObserver?.observe(section));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isUserScrolling = true;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
    }, 500);
  }

  scrollToSection(data: { section: string; sectionId: string }): void {
    this.isUserScrolling = false;
    this.activeSection.set(data.section);
    const element = this.document.getElementById(data.sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
