import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { slideInAnimation } from 'src/app/animations';
import { BlogPostCard } from 'src/app/interfaces/ride';
import { rideDetails } from 'src/app/interfaces/ridetail.interface';

import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css'],
  animations: [slideInAnimation]
})
export class RidesComponent implements OnInit {
  // posts = posts;
  heroes$!: Observable<BlogPostCard[]>;
  selectedId = 0;
  ride_home:string = 'https://images.unsplash.com/photo-1503505946976-e489ce29e0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1777&q=80'
  constructor(
    private service: RideService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getRides();
      })
    );
  }
}
