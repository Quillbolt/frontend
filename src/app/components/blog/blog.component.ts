import { Component, Input } from '@angular/core';
import { blog_content } from 'src/app/mockdata/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
@Input() blog_content=blog_content;
}
