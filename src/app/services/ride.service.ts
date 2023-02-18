import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { rideDetails } from '../interfaces/ridetail.interface';

import { RIDETAIL,posts } from '../mockdata/ridedata';
import { MessageService } from './message.service';
import { BlogPostCard } from '../interfaces/ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private messageService: MessageService) { }
  getRides(): Observable<BlogPostCard[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('RideService: fetched heroes');
    return of(posts);
  }

  getRide(id: number | string) {
    return this.getRides().pipe(
      // (+) before `id` turns the string into a number
      map((rides: BlogPostCard[]) => rides.find(ride => ride.id === +id)!)
    );
  }
}
