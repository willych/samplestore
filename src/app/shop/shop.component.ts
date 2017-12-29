import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { forEach } from '@angular/router/src/utils/collection';

const products = [];

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  itemCount: number = 0;
  items = [];
  query = '';
  public model: any;
  sortValue = '0';
  currentRate = 0;

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 2 ? []
      : products.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  constructor(private _data: DataService) { 
  }

  ngOnInit() {
    this.items = this._data.getItems();
    this.itemCount = this.items.length;
    for(var itemNum in this.items) {
      products.push(this.items[itemNum].name);
    }
  }
  
}