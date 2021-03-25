import { Component, OnInit } from '@angular/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

//import { url } from 'inspector';

export interface MyData {
  //productID: string;
  name: string;
  filepath: string;
  size: number;
  Brand_name: any;
  Category: any;
  Sub_Category: any;
  Available_Colours: string;
  Available_Size: any;
  Material_Of_Product: string;
  Care_Note: string;
  Sleeve_Styling: string;
  Availavle_Stock: number;
  Price: number;
}

interface ProductsData {
  Brand_Name: string;
  Category: string;
  Sub_Category: string;
  Available_Colours: string;
  Available_Size: string;
  Material_Of_Product: string;
  Care_Note: string;
  Sleeve_Styling: string;
  Availavle_Stock: number;
  //Img_URL: string;
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.page.html',
  styleUrls: ['./image-upload.page.scss'],
})
export class ImageUploadPage {

  public myProductList: Observable<any>;

// Upload Task 
task: AngularFireUploadTask;

// Progress in percentage
percentage: Observable<number>;

// Snapshot of uploading file
snapshot: Observable<any>;

// Uploaded File URL
UploadedFileURL: Observable<string>;

//Uploaded Image List
images: Observable<any>;

//File details  
fileName:string;
fileSize:number;

//Status check 
isUploading:boolean;
isUploaded:boolean;

//getUrl

private imageCollection: AngularFirestoreCollection<MyData>;
private productCollection: AngularFirestoreCollection<ProductsData>;

productList = [];
productData: ProductsData;
productForm: FormGroup;
  //constructor() { }
  constructor(private storage: AngularFireStorage, private database: AngularFirestore, private firebaseService: FirebaseService,
    public fb: FormBuilder) {
    this.productData = {} as ProductsData;

    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('productImages');
    this.images = this.imageCollection.valueChanges();
    }
  ngOnInit() 
  
  {
    /*const citiesRef = this.database.collection<MyData>('productImages');
const snapshot =  citiesRef.get();
snapshot.forEach(doc => {
  console.log(doc.docs.forEach);
});*/
    
    this.productForm = this.fb.group({
      Brand_Name: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Sub_Category: ['', [Validators.required]],
      Available_Colours: ['', [Validators.required]],
      Available_Size: ['', [Validators.required]],
      Material_Of_Product: ['', [Validators.required]],
      Care_Note: ['', [Validators.required]],
      Sleeve_Styling: ['', [Validators.required]],
      Availavle_Stock: ['', [Validators.required]],
      Price: ['', [Validators.required]]
    })
  
    this.firebaseService.read_products().subscribe(data => {

      this.productList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Brand_Name: e.payload.doc.data()['Brand_Name'],
          Category: e.payload.doc.data()['Category'],
          Sub_Category: e.payload.doc.data()['Sub_Category'],
          Available_Colours: e.payload.doc.data()['Available_Colours'],
          Available_Size: e.payload.doc.data()['Available_Size'],
          Material_Of_Product: e.payload.doc.data()['Material_Of_Product'],
          Care_Note: e.payload.doc.data()['Care_Note'],
          Sleeve_Styling: e.payload.doc.data()['Sleeve_Styling'],
          Availavle_Stock: e.payload.doc.data()['Availavle_Stock'],
          Price: e.payload.doc.data()['Price'],
          //Img_URL: e.payload.doc.data()['Img_URL']
          //Img_URL: this.UploadedFileURL,
          //Age: e.payload.doc.data()['Age'],
          //Address: e.payload.doc.data()['Address'],
          
          
        };
      }) 
      console.log(this.productList);
      //const citiesRef = db.collection('cities');
      
      //console.log(this.imageCollection.ref.get());
      //console.log((this.productList[this.productList.length - 1]).id);
    });
    /*this.myProductList= this.database.collection('Products').valueChanges({ idField: 'productId' });
    console.log(this.myProductList.subscribe());*/
    console.log("data ia:");
    console.log(this.images);
    }

    CreateRecord() {
      console.log(this.productForm.value);
      console.log(this.productForm.value.Brand_Name);
      /*this.firebaseService.create_new_products(this.productForm.value).then(resp => {
        //this.productForm.reset();
      })
        .catch(error => {
          console.log(error);
        });*/
        
      
    }
  
    RemoveRecord(rowID) {
      this.firebaseService.delete_products(rowID);
    }
  
    EditRecord(record) {
      record.isEdit = true;
      record.EditName = record.Name;
      record.EditAge = record.Age;
      record.EditAddress = record.Address;
    }
  
    UpdateRecord(recordRow) {
      let record = {};
      record['Name'] = recordRow.EditName;
      record['Age'] = recordRow.EditAge;
      record['Address'] = recordRow.EditAddress;
      this.firebaseService.update_products(recordRow.id, record);
      recordRow.isEdit = false;
    }
  
  
  uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `productStorage/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Sai Ecommerce App' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
       // console.log("Image path is :"+fileRef.getDownloadURL());
        console.log(this.productForm.value.Brand_Name);
       // Uri downloadUri = taskSnapshot.getMetadata().getDownloadUrl();
        //generatedFilePath = downloadUri.toString();
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            //productID: this.productList[this.productList.length - 1].id,
            name: file.name,
            filepath: resp,
            size: this.fileSize,
            Brand_name: this.productForm.value.Brand_Name,
            Category: this.productForm.value.Category,
            Sub_Category: this.productForm.value.Sub_Category,
            Available_Colours: this.productForm.value.Available_Colours,
            Available_Size: this.productForm.value.Available_Size,
            Material_Of_Product: this.productForm.value.Material_Of_Product,
            Care_Note: this.productForm.value.Care_Note,
            Sleeve_Styling: this.productForm.value.Sleeve_Styling,
            Availavle_Stock: this.productForm.value.Availavle_Stock,
            Price: this.productForm.value.Price
          });
          this.isUploading = false;
          this.isUploaded = true;
          //this.productForm.reset();
         console.log("URL:"+resp);
         //console.log(this.imageCollection.doc(id).get(resp));
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }
  
  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();
    //console.log("ID is : "+id);
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });this.productForm.reset();
    console.log(this.imageCollection);
    
  }

  next(slides){
    slides.slideNext(); // slide to next
}
}
