import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Rsvp } from '../interfaces/rsvp';
import { CommunityEvent } from '../interfaces/community-event';


@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private rsvpsSubject: BehaviorSubject<Rsvp[]> = new BehaviorSubject<Rsvp[]>([
    { playerId: 'a1', eventId: '1' },
    { playerId: 'a2', eventId: '1' },
    { playerId: 'a3', eventId: '2' },
    { playerId: 'a4', eventId: '1' }
  ]);

  rsvps$ = this.rsvpsSubject.asObservable();

  /**
   * Find the community event with the most RSVPs
   * @param rsvps List of RSVPs
   * @param communityEvents List of community events
   * @returns The community event with the most RSVPs or null if there is no data
   */
  findCommunityEventWithMostRsvps(rsvps: Rsvp[], communityEvents: CommunityEvent[]): CommunityEvent | null {
    // Early return if there are no RSVPs or community events
    if(!rsvps.length || !communityEvents.length) return null;

    //count the number of RSVPs for each community event
    const rsvpCounts = this.countRsvpsByCommunityEvent(rsvps);

    //find the community event with the most RSVPs
    return this.findCommunityEventWithMaxRsvps(communityEvents, rsvpCounts);
  }

  /**
   * Count the number of RSVPs for each community event
   * @param rsvps List of RSVPs
   * @returns A map of community event IDs to the number of RSVPs
   */
  private countRsvpsByCommunityEvent(rsvps: Rsvp[]): Map<string, number> {
    return rsvps.reduce((counts, rsvp) => {
      const currentCount = counts.get(rsvp.eventId) || 0;
      counts.set(rsvp.eventId, currentCount + 1);
      return counts;
    }, new Map<string, number>());
  }

  /**
   * Find the community event with the most RSVPs
   * @param communityEvents List of community events
   * @param rsvpCounts Map of community event IDs to the number of RSVPs
   * @returns The community event with the most RSVPs or null if there is no data
   */
  private findCommunityEventWithMaxRsvps(communityEvents: CommunityEvent[], rsvpCounts: Map<string, number>): CommunityEvent | null {
    let maxRsvps = 0;
    let eventWithMostRsvps: CommunityEvent | null = null;

    communityEvents.forEach(event => {
      const rsvpCount = rsvpCounts.get(event.id) || 0;
      if (rsvpCount > maxRsvps) {
        maxRsvps = rsvpCount;
        eventWithMostRsvps = event;
      }
    });

    return eventWithMostRsvps;
  }
}