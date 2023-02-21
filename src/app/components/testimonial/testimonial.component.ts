import { Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/interfaces/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
@Input() testimonial1: Testimonial[] = [
  {title:'35 Years Old',
    name:'Distinctio Animi',
    image:'https://source.unsplash.com/50x50/?portrait?1',
    content:'The park is nice and has clean water and safe for kids..The kid will really enjoy the different rides they have..Budget friendly picnic spot..'},
  {title:'30 years old couples',
    name:'Caedric Smith',
    image:'https://source.unsplash.com/50x50/?portrait?2',
    content:'Angular water park is big and nice,water park is loocking so good,place is cleane and nice,fully enjoy place with friend and family'},
  {title:'Reporters at Times News',
    name:'Sophia Lennon',
    image:'https://source.unsplash.com/50x50/?portrait?3',
    content:'It take lots of time to maintain this place and they make sure everything is working properly'},
  {title:'Visitors',
  name:'visitors',
image:'https://source.unsplash.com/50x50/?portrait?4',
content:'We visited this park with 6 of us - husband and myself and four children 13, 12, 10 and 7. We had a really fun day'}
]
}