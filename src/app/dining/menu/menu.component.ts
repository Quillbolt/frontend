import { Component } from '@angular/core';
import { BreakFast, Dinner, Lunch } from '../../interfaces/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 BreakFast = BreakFast;
 lunch = Lunch;
 dinner = Dinner;
 resBG = "bg-banner-pattern"
 headline = "Enjoy fullfilled meals with a variety of food options available"
 headImage = '../assets/matheus-frade-KO46ZfbNdtY-unsplash.jpg'
 openTab = 1;
 toggleTabs($tabNumber: number){
  this.openTab = $tabNumber;
}
}
