import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavors-model';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

  flavor: Flavor = {
    name: 'chamomile',
    brand: 'SkyeTown',
    sugarContent: 80,
    volume: 24
  };


  constructor() { }

  ngOnInit() {
  }

  
}
