import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogPostCard } from 'src/app/interfaces/ride';
import { rideDetails } from 'src/app/interfaces/ridetail.interface';


import { RideService } from 'src/app/services/ride.service';
@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {
  rideDetail$!: Observable<BlogPostCard>;
  selectedId = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rideService: RideService,
  ) { }
  ngOnInit() {
    this.rideDetail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.rideService.getRide(params.get('id')!))
    );
  }
  gotoRides(rideDetail: BlogPostCard) {
    const rideID = rideDetail ? rideDetail.id : null;
    // Pass along the ride id if available
    // so that the rides component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/ride', { id: rideID, foo: 'foo' }]);
  }

}

