import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Location } from '@angular/common';
import { slideInAnimation } from 'src/app/animations';

import { BlogPostCard } from 'src/app/interfaces/ride';
import { rideDetails } from 'src/app/interfaces/ridetail.interface';


import { RideService } from 'src/app/services/ride.service';
@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css'],
  animations: [slideInAnimation]
})
export class RideDetailComponent implements OnInit {
  rideDetail$!: Observable<BlogPostCard>;
  selectedId = 0;
  private readonly canGoBack: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rideService: RideService,
    private location: Location
  ) { 
    this.canGoBack = !!(this.router.getCurrentNavigation()?.previousNavigation);
  }
  ngOnInit() {
    this.rideDetail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.rideService.getRide(params.get('id')!))
    );
  }
  gotoRides() {
    if (this.canGoBack) {
      // We can safely go back to the previous location as
      // we know it's within our app.
      this.location.back();
    } else {
      // There's no previous navigation.
      // Here we decide where to go. For example, let's say the
      // upper level is the index page, so we go up one level.
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }
  gotoNextRide(rideDetail: BlogPostCard){
    const rideID = rideDetail ? rideDetail.id : null;
    this.router.navigate(['/ride/ride', 3]);
  }
}

