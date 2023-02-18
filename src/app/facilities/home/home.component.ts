import { Component } from '@angular/core';
import { Equiment } from 'src/app/interfaces/equiment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  equipments = Equiment
}
