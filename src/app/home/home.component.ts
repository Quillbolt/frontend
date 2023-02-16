import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
//  Hero
textdescription:string = 'Modern water parks may also be equipped with some type of artificial surfing or bodyboarding environment, such as a wave pool or flowrider.'
headline:string = 'A Next-Generation Thrill water Ride.'
image:string ='https://images.unsplash.com/photo-1630620529668-7769c5889cbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
// content
lefter:string='https://images.unsplash.com/photo-1566230555350-59683b1d16e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8ODQ4NDMyNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
righter:string='https://images.unsplash.com/photo-1562956363-bf2f1c9de6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4NDg0MzI0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
body:string='An amusement park that features water play areas such as swimming pools, water slides, splash pads, water playgrounds, and lazy rivers, as well as areas for floating, bathing, swimming, and other barefoot environments.'
header:string='Slide Into Fun'
smallheader:string='Splash, swim and slide into the perfect day at this must see Gold Coast destination!'
//carousel
imageCarousel= [
  {url:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/attractions/typhoon-lagoon/crush-n-gusher/crush-n-gusher-gallery00.jpg?1658993543077'},
  {url:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/attractions/typhoon-lagoon/crush-n-gusher/crush-n-gusher-gallery01.jpg?1658993543077'},
  {url:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/attractions/typhoon-lagoon/crush-n-gusher/crush-n-gusher-gallery03.jpg?1658993543077'},
  {url: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/attractions/typhoon-lagoon/crush-n-gusher/crush-n-gusher-gallery08.jpg?1658993543078'},
  {url:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/gallery/attractions/typhoon-lagoon/surf-pool/typhoon-lagoon-surf-pool-gallery02.jpg?1659021851071'}
]


}
