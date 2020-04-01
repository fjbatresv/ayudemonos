import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Request } from '../models/request.model';

@Injectable({ providedIn: 'root' })
export class FirestoreService {

  constructor(
    private aFirestore: AngularFirestore
  ) { }

  getRecentRequests() {
    return this.aFirestore
      .collection<Request>('request', ref => ref.orderBy('timestamp', 'desc'))
      .get();
  }

  getRequestsByCategory(id: string) {
    const reference = this.aFirestore.collection('category').doc(id).ref;
    return this.aFirestore.collection('request',
      ref => ref.where('categoryReference', '==', reference).orderBy('timestamp', 'desc'))
      .get();
  }
}
