import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CookieService],
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  title = 'app';
  numCartItems = 0;

  constructor(private _cookieService:CookieService) { 

  }

  ngOnInit() {
    this.numCartItems = this.getCartCount();
  }

  getCookie(key:string) {
    return this._cookieService.get(key);
  }

  getCartCount() {
    return Object.keys(this._cookieService.getAll()).length;
  }

}




