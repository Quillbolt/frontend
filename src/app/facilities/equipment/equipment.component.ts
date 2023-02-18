import { Component, Input } from '@angular/core';
import { Equiment } from '../../interfaces/equiment'
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  @Input() Equipment!:Equiment;
}
