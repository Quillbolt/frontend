import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent,
    TestimonialComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent,
    TestimonialComponent,
    WeatherComponent
  ]
})
export class ComponentsModule { }
