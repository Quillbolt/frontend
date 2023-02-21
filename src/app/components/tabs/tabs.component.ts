import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabOverview: string = '';
  @Input() tabStat: string = '';
  @Input() tabSafety: string = '';
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
}
