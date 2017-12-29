import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from  '../data.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [
    NgbRatingConfig,
    CookieService
  ]
})
export class DetailsComponent implements OnInit {
  title = 'app';
  item: any;
  
  //Current star rating(set default to 0)
  currentRate = 0;
  quantity = 0;

  //Set a toggle for the add cart button so we can display a success button when the user adds an item to the cart
  buttonWasClicked: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService, private _cookieService:CookieService) {
    this.route.params.subscribe(res => this.item = this._data.getItem(res.id));
    this.currentRate = this.item.rating;

  }

  ngOnInit() {

  }

  goHome() {
    this.router.navigate(['']);
  }
  
  getCookie(key:string) {
    return this._cookieService.get(key);
  }

  setCookie(cookieName:string, cookieVal:string) {
    this._cookieService.put(cookieName, cookieVal);
    this.buttonWasClicked = true;
  }

}
