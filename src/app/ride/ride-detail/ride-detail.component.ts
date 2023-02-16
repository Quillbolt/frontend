import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ridetail } from 'src/app/interfaces/ridetail.interface';
@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent {
 @Input() headImage = 'https://source.unsplash.com/random/480x360';
 @Input() Title = ''
  rideDetail!:Observable<ridetail> 
 constructor(
  private route: ActivatedRoute,
  private router: Router,
){} 
 
}
