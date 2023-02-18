import { Component, Input } from '@angular/core';
import { carouselItems } from 'src/app/interfaces/ridetail.interface';

@Component({
  selector: 'app-imagecarousel',
  templateUrl: './imagecarousel.component.html',
  styleUrls: ['./imagecarousel.component.css']
})
export class ImagecarouselComponent {
 @Input() imageCarousel:carouselItems[] = [
  {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/WDW_Typhoon_Lagoon_Surf_Pool.JPG/330px-WDW_Typhoon_Lagoon_Surf_Pool.JPG'},
  {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/WDW_Typhoon_Lagoon_Surf_Pool.JPG/330px-WDW_Typhoon_Lagoon_Surf_Pool.JPG'},
  {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sunway_Lagoon2013_1.jpg/360px-Sunway_Lagoon2013_1.jpg'},
  {url: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'},
  {url:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Marine_and_waterpark_aquaventure_waterpark.jpg/270px-Marine_and_waterpark_aquaventure_waterpark.jpg'}
]
}
