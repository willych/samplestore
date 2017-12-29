import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ NgbCarouselConfig ]
})


export class HomeComponent implements OnInit {

  constructor(private _data: DataService, config: NgbCarouselConfig) { 
    //Carousel configuration
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {

  }

}
