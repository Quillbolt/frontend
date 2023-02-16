import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Hero part
  textdescription:string = 'Want to eat out but don’t know where to start? Browse our amazing dining options and find one that satisfies your needs!'
  headline:string = 'Where every flavor tells a story'
  image:string ='https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  linkage:string='/menu'
  // content
  lefter:string='https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  righter:string='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  body:string='Looking for a delicious and healthy way to top off your day? Salmon is the perfect food – try a couple of recipes today!'
  header:string='Eat outside the box.'
  smallheader:string='A pinch of passion in every dish.'

}
