import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { count } from 'console';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnChanges {
  proList: IProduct[];
  proTotalPrice: number = 0;
  catList: ICategory[];
  @Input() sentCatId: number = 0;
  OrderDate;
  proListByCat: IProduct[] = [];
  @Output() orderTotalPriceChanged:EventEmitter<number>;
  constructor() {
    this.orderTotalPriceChanged = new EventEmitter<number>();
    this.proList = [
      { id: 100, name: "Mobile Samsung", price: 2000, quantity: 5, categortId: 1, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 101, name: "Mobile Samsung", price: 3000, quantity: 2, categortId: 1, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 102, name: "Mobile Xaomi", price: 5000, quantity: 0, categortId: 2, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 103, name: "Mobile Huawei", price: 2500, quantity: 2, categortId: 3, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 104, name: "Mobile Oppo", price: 7000, quantity: 7, categortId: 4, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 105, name: "Mobile Oppo", price: 6000, quantity: 1, categortId: 4, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 106, name: "Mobile Oppo", price: 4000, quantity: 0, categortId: 4, imgUrl: "https://fakeimg.pl/250x100/" },
      { id: 107, name: "Mobile Oppo", price: 4500, quantity: 4, categortId: 4, imgUrl: "https://fakeimg.pl/250x100/" },
    ];
    this.catList = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Xaomi" },
      { id: 3, name: "Huawei" },
      { id: 4, name: "Oppo" },
    ];
    this.proListByCat = this.proList;
    this.OrderDate = new Date();
  }
  private filterByCatId() {
    if (this.sentCatId == 0)
      this.proListByCat = this.proList;
    else
      this.proListByCat = this.proList.filter(pro => pro.categortId == this.sentCatId);
  }
  ngOnChanges(): void {
    this.filterByCatId();
  }
  proTrackByFunc(index: number, pro: IProduct): number {
    return pro.id;
  }
  buy(proPrice: number, icount: string) {
    //// Casting from s to n
    //let itemsCount:number = icount;
    this.proTotalPrice += parseInt(icount) * proPrice; //undefined if error
    //this.proTotalPrice = Number(icount)* proPrice;  //0 if error
    //  this.proTotalPrice = (icount as number) * proPrice; //error if string ////solution >> any
    //  this.proTotalPrice = +icount * proPrice;  //0 if error
   //Execute Event
   this.orderTotalPriceChanged.emit(this.proTotalPrice);
  }
  // changeCat(){
  //   this.selectedCatId = 1;
  // }
}
