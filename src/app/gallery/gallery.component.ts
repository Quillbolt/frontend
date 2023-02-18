import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
@Input() image_link1: string = 'https://images.unsplash.com/photo-1628238996362-a90f37d35b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

@Input() image_link2: string = 'https://images.unsplash.com/photo-1626313680130-d18000ed7303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

@Input() big_image_link1: string = 'https://images.unsplash.com/photo-1564436644974-d6e275defaa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

@Input() image_link4: string = 'https://images.unsplash.com/photo-1562859797-0aa1d9876507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGVyJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

@Input() image_link5: string = 'https://images.unsplash.com/photo-1559956144-ee11501d5459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGVyJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

@Input() big_image_link2:string = 'https://images.unsplash.com/photo-1559956144-ee11501d5459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhdGVyJTIwcGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
}
