import { Component } from '@angular/core';
import { posts } from 'src/app/interfaces/temp';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  posts = posts;
}
