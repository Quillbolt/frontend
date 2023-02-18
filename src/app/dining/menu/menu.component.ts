import { Component } from '@angular/core';
import { FooDesert, FooDrink, FooLights } from 'src/app/interfaces/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 drinks = FooDrink;
 deserts = FooDesert;
 lights = FooLights;
}
