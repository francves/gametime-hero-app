import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunityEvent } from './interfaces/community-event';

@Injectable({
  providedIn: 'root'
})
export class CommunityEventService {

  private communityEventsSubject: BehaviorSubject<CommunityEvent[]> = new BehaviorSubject<CommunityEvent[]>([
    { id: '1', title: 'Pickup Soccer', description: '5v5 game at the park' },
    { id: '2', title: 'Yoga Class', description: 'Outdoor yoga in the morning' }
  ]);

  communityEvents$ = this.communityEventsSubject.asObservable();

}