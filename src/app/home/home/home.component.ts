import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore/interfaces';
import { Request } from 'src/app/core/models/request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  requests: Request[] = [];
  search = '';

  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
    this.firestoreService.getRecentRequests()
      .subscribe((query: QuerySnapshot<Request>) => {
        this.requests = query.docs.map((doc: QueryDocumentSnapshot<Request>) => {
          const tmp: Request = doc.data();
          tmp.ref = doc.ref;
          return tmp;
        });
      });
  }

}
