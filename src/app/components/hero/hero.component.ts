import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() item : string = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
}
