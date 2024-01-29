import { Component } from '@angular/core';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrl: './master-order.component.scss'
})
export class MasterOrderComponent {
  catList : ICategory[];
  selectedCatId:number = 0;
  OrderPrice:number=0;
  constructor(){
    this.catList = [
      {id:1,name:"Samsung"},
      {id:2,name:"Xaomi"},
      {id:3,name:"Huawei"},
      {id:4,name:"Oppo"},
    ];
  }
}
