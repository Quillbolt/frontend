import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() location: string='Dubai';
  @Input() weatherCondition: string='Partly cloudy';
  @Input() weather: [number,number] = [30,20];
  today: Date = new Date();
}
