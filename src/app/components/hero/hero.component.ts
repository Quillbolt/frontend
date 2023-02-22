import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  /* Hero */
  @Input() item : string = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'

  @Input() headline : string = 'Enjoy family fun at a local water park!';

  @Input() textdescription : string ='Looking for a fun day out? Visit a water park! This unique experience offers a variety of activities to keep you entertained all day long.'

  @Input() linkage: string ='/faq'
 // OR  bg-gradient-to-r from-sky-500 to-indigo-500
  @Input() background: string = 'bg-water-texture'
}
