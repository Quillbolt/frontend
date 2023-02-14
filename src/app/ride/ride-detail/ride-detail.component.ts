import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent {
 @Input() headImage = 'https://source.unsplash.com/random/480x360';
 @Input() Title = ''
//  @Input() headImage = ''
//  @Input() headImage = ''
}
