import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavors-model';
import { FlavorList } from '../models/mock-flavors-model';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {
  newFlavorList = new FlavorList();
  flavors = this.newFlavorList.flavorList;
  

  selectedFlavor: Flavor;
  onSelect(flavor: Flavor): void {
    this.selectedFlavor = flavor;
  };
  
  newFlavor: Flavor = new Flavor('Cantaloupe','ChanOppa',45);
  

  constructor() { 
   
  }

  ngOnInit() {
  }

  AddNewFlavor() {
    this.newFlavorList.addFlavor(this.newFlavor);
  }
}
