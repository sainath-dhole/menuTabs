import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages=[
    {
      title: 'Home',
      url: "/menu/first/tab1"
    },
    {
      title: 'Category',
      url: '/menu/second'
    },
   /*{
      title: 'Upload',
      url: '/menu/upload'
    },*/
    {
      title: 'Seller Portal',
      url: '/menu/add-new-product'
    }
  ];

  selectedPath='';
  constructor(private router: Router) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      if(event && event.url)
      {
        this.selectedPath=event.url;
      }
    });
  }

  ngOnInit() {
  }

}
