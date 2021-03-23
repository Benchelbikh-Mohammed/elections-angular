import { Component, OnInit } from '@angular/core';
import PartiePol from 'src/app/models/partiePol.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-partie-pol',
  templateUrl: './partie-pol.component.html',
  styleUrls: ['./partie-pol.component.scss']
})
export class PartiePolComponent implements OnInit {

  partiePol: Array<PartiePol>

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.partiePol = this.service.partiePol;
    console.log(this.partiePol)
  }

}
