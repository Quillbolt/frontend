import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ridetail } from '../interfaces/ridetail.interface';
import { RIDETAIL } from '../mockdata/ridedata';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<ridetail[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('RideService: fetched heroes');
    return of(RIDETAIL);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((rides: ridetail[]) => rides.find(ride => ride.id === +id)!)
    );
  }
}
