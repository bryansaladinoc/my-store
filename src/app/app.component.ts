import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  alt = '';

  onLoaded(img: string) {
    console.log('log padre', img); 1
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
