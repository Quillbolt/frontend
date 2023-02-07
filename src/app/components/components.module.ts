import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent
  ]
})
export class ComponentsModule { }
