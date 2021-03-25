import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public categories = [];
  constructor(private data: DataService,) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
  }

}
