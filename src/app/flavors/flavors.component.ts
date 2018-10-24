import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavors-model';
import { FLAVORS } from '../models/mock-flavors-model';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {
  flavors = FLAVORS;

  selectedFlavor: Flavor;
  onSelect(flavor: Flavor): void {
    this.selectedFlavor = flavor;
  }

  constructor() { 
   
  }

  ngOnInit() {
  }

  
}
