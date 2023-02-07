import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';



@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    ImagecarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    HeroComponent,
    ImagecarouselComponent
  ]
})
export class ComponentsModule { }
