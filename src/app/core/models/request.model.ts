import { DocumentReference } from '@angular/fire/firestore/interfaces';
import { firestore } from 'firebase';

export interface Request {
    ref?: DocumentReference;
    description: string;
    user: string;
    userName: string;
    categoryReference: DocumentReference;
    categoryName: string;
    country: string;
    city: string;
    contact: string;
    timestamp: firestore.Timestamp;
}