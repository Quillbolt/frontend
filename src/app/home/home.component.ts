import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//  Hero
textdescription:string = ''
headline:string = 'A Next-Generation Thrill water Ride.'
image:string ='https://images.unsplash.com/photo-1559956144-6358aa6ba82e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
bg_image =""
// content
lefter:string='https://images.unsplash.com/photo-1566230555350-59683b1d16e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODQ4NDMyNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
righter:string='https://images.unsplash.com/photo-1562956363-bf2f1c9de6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NDg0MzI0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
body:string='An amusement park that features water play areas such as swimming pools, water slides, splash pads, water playgrounds, and lazy rivers, as well as areas for floating, bathing, swimming, and other barefoot environments.'
header:string='Slide Into Fun'
smallheader:string='Splash, swim and slide into the perfect day at this must see Gold Coast destination!'
//carousel
imageCarousel= [
  {url:'../../../assets/crush-n-gusher-gallery00.webp'},
  {url:'../../../assets/crush-n-gusher-gallery03.webp'},
  {url:'../../../assets/crush-n-gusher-gallery01.webp'},
  {url: '../../../assets/crush-n-gusher-gallery08.webp'},
  {url:'../../../assets/crush-n-gusher-gallery00.webp'}
]


}
