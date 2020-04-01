import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { Request } from 'src/app/core/models/request.model';
import { QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore/interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id: string;
  requests: Request[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getRequestsByCategory();
    });
  }

  ngOnInit(): void {
  }

  getRequestsByCategory() {
    this.firestoreService.getRequestsByCategory(this.id)
      .subscribe((query: QuerySnapshot<Request>) => {
        this.requests = query.docs.map((doc: QueryDocumentSnapshot<Request>) => {
          const tmp: Request = doc.data();
          tmp.ref = doc.ref;
          return tmp;
        });
      });
  }

}
