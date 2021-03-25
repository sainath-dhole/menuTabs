import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
//import { ImageUploadPage } from '../image-upload.module';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { MyData } from '../image-upload/image-upload.page';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.page.html',
  styleUrls: ['./view-products.page.scss'],
})
export class ViewProductsPage implements OnInit {
  images: Observable<any>;
  //public bestSellProducts = [];
  //Uploaded Image List
  
//productData: ProductsData;
  constructor(private data: DataService, private firebaseService: FirebaseService, private database: AngularFirestore, public nav: NavController) { 
    this.images = database.collection<MyData>('productImages').valueChanges();
    
  }

  ngOnInit() {}
  
  
}
