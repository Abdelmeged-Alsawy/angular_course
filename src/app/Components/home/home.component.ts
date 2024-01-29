import { Component, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
StoreInfo : StoreData;
isImageShown :boolean = true;
constructor(){
  this.StoreInfo = new StoreData("Store 1" , "https://picsum.photos/400/200" , ["Cairo","ALex","Mansoura"]);
}
toggleImg(){
  this.isImageShown = !this.isImageShown;
  }
}

