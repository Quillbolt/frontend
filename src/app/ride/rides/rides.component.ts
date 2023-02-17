import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogPostCard } from 'src/app/interfaces/ride';
import { rideDetails } from 'src/app/interfaces/ridetail.interface';

import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent implements OnInit {
  // posts = posts;
  heroes$!: Observable<BlogPostCard[]>;
  selectedId = 0;

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
