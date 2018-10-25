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
  addNew = false;
  editing = false;

  sortDirection: string = "ascending";
  onChange(optionFromMenu) {
    this.sortDirection = optionFromMenu;
  }
  
  addNewFlavor(name,brand,sugarContent,price) {
    let newFlavor = new Flavor(name,brand,sugarContent,price);
    this.newFlavorList.addFlavor(newFlavor);
  }


  selectedEditFlavor: Flavor;
  editFlavor(clickedFlavor)
  {
    this.selectedEditFlavor = clickedFlavor;
    this.editing = true;
    
  }
  finishedEditing() {
    this.selectedEditFlavor = null;
    this.editing = false;
  }
  

  soldFlavor(clickedFlavor)
  {
    clickedFlavor.volume--;
  }

  constructor() { 
   
  }

  ngOnInit() {
  }



 
}
