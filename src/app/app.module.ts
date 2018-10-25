import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceSort} from './pricesort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FlavorsComponent,
    NavbarComponent,
    PriceSort
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
