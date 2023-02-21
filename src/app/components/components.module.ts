import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeroComponent } from './hero/hero.component';
import { ImagecarouselComponent } from './imagecarousel/imagecarousel.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { StatComponent } from './stat/stat.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent,
    TestimonialComponent,
    WeatherComponent,
    BlogComponent,
    StatComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    BlogComponent,
    CardComponent,
    HeroComponent,
    ImagecarouselComponent,
    ContentComponent,
    TestimonialComponent,
    WeatherComponent,
    StatComponent,
    TabsComponent
  ]
})
export class ComponentsModule { }
