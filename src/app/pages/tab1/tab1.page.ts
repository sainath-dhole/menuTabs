import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public categories = [];
  public offers = [];
  public bestSellProducts = [];
// Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    
      initialSlide: 0,
      slidesPerView: 1,
      autoplay:true
    
  };
  constructor(private data: DataService,) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.offers = this.data.getOffers();
    this.bestSellProducts = this.data.getBestSellProducts();
  }

}
