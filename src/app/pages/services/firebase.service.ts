import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  collectionName = 'Products';

  constructor(private firestore: AngularFirestore) { }

create_new_products(record) {
  return this.firestore.collection(this.collectionName).add(record);
}

read_products() {
  return this.firestore.collection(this.collectionName).snapshotChanges();
}

update_products(recordID, record) {
  this.firestore.doc(this.collectionName + '/' + recordID).update(record);
}

delete_products(record_id) {
  this.firestore.doc(this.collectionName + '/' + record_id).delete();
}
}