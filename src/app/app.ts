import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorEffectComponent } from './components/cursor-effect/cursor-effect.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursorEffectComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
