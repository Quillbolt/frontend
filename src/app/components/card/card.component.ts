import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../../interfaces/ride';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  data!: BlogPostCard;
  constructor() {}
  ngOnInit(): void {}
}





