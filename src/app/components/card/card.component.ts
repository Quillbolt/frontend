import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from 'src/app/interfaces/ride';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  data!: BlogPostCard;
  @Input()
  routerLink!: string;
  constructor() {}
  ngOnInit(): void {}
}





