import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import PartiePol from 'src/app/models/partiePol.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-partie-pol',
  templateUrl: './partie-pol.component.html',
  styleUrls: ['./partie-pol.component.scss']
})
export class PartiePolComponent implements OnInit {

  partiePol: AngularFirestoreCollection<PartiePol>

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.addPartie(new PartiePol("first partie"));
    // console.log(this.partiePol)
  }

}
