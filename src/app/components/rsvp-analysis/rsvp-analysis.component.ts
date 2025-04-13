import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityEvent } from '../../interfaces/community-event';
import { RsvpService } from '../../services/rsvp.service';
import { CommunityEventService } from '../../services/community-event.service';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rsvp-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rsvp-analysis.component.html',
  styleUrl: './rsvp-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RsvpAnalysisComponent implements OnDestroy {
    communityEventWithMostRsvps: CommunityEvent | null = null;
    private destroy$ = new Subject<void>();

  constructor(private rsvpService: RsvpService, private communityEventService: CommunityEventService) {
    this.analyzeRsvps();
  }
  
  /**
   * Analyze the RSVPs and find the community event with the most RSVPs
   */
  private analyzeRsvps(): void {
    combineLatest([
      this.rsvpService.rsvps$,
      this.communityEventService.communityEvents$
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(([rsvps, communityEvents]) => {
      this.communityEventWithMostRsvps = this.rsvpService.findCommunityEventWithMostRsvps(rsvps, communityEvents);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}
