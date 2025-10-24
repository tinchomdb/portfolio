import { Component, Input, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../../../portfolio.model';

interface ProjectImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGalleryComponent {
  @Input() project: Project = <Project>{};

  currentImageIndex = signal<number>(0);

  selectImage(index: number): void {
    this.currentImageIndex.set(index);
  }

  get currentImage(): ProjectImage | undefined {
    return this.project?.images?.[this.currentImageIndex()];
  }
}
