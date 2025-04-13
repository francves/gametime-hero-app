import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RsvpAnalysisComponent } from './components/rsvp-analysis/rsvp-analysis.component';
@Component({
  selector: 'app-root',
  imports: [RsvpAnalysisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
