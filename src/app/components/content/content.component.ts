import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() headline: string = 'Hello';

  @Input() body: string = 'Hello';

  @Input() leftimage: string = '';

  @Input() rightimage: string = '';

  @Input() smallheader: string ='';
}
