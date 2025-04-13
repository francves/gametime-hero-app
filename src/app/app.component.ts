import { Component } from '@angular/core';
import { RsvpAnalysisComponent } from './rsvp-analysis/rsvp-analysis.component';
@Component({
  selector: 'app-root',
  imports: [RsvpAnalysisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
