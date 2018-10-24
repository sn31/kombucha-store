import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavors-model';
import { FlavorList } from '../models/mock-flavors-model';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent{
  newFlavorList = new FlavorList();
  flavors = this.newFlavorList.flavorList;
  

  selectedFlavor: Flavor;
  onSelect(flavor: Flavor): void {
    this.selectedFlavor = flavor;
  };
  
  
  addNewFlavor(name,brand,sugarContent) {
    let newFlavor = new Flavor(name,brand,sugarContent);
    this.newFlavorList.addFlavor(newFlavor);
  }

  selectedEditFlavor: Flavor;
  editFlavor(clickedFlavor)
  {
    this.selectedEditFlavor = clickedFlavor;
    this.selectedFlavor = null;
  }
  finishedEditing() {
    this.selectedFlavor = null;
  }

  constructor() { 
   
  }

  ngOnInit() {
  }

 
}
