import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  providers: [CookieService],
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  cartItemCookie;
  cartItems = [];
  cartTotal = 0;
  numCartItems = 0;

  constructor(private _cookieService:CookieService, private _data: DataService) { 
    
  }

  ngOnInit() {
    this.getCart();
  }
  getCart() {
    this.cartItems = [];

    this.cartItemCookie = this.getAllCookies();
    this.numCartItems = this.getCookieCount(this.cartItemCookie);
    this.getItems();
  }

  updateCart(_id: string, _value: string) {
    this.setCookie(_id, _value);
    this.getCart();
  }

  getItems() {
    for (var key in this.cartItemCookie) {
      var quantity = this.getCookie(key);
      var itemData = this._data.getItem(key);
      var total = parseInt(quantity) * itemData.price;
      var item = { 
        "id": key,
        "quantity": quantity,
        "name": itemData.name,
        "price": itemData.price,
        "total": total
      };
      this.cartItems.push(item);
      this.cartTotal += total;
    }
  }

  getCookieCount(_cookie:string) {
    return Object.keys(_cookie).length;
  }

  getCookie(key:string) {
    return this._cookieService.get(key);
  }

  getAllCookies() {
    return this._cookieService.getAll();
  }

  setCookie(cookieName:string, cookieVal:string) {
    this._cookieService.put(cookieName, cookieVal);
  }

  removeCookie(_cookie:string) {
    this._cookieService.remove(_cookie);
  }

  /*
  removeAllCookies() {
    for (var key in this.cartItems) {
      this.removeCookie(key);
    }
  }*/
}
