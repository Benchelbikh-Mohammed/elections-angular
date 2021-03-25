import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Citoyen from '../models/citoyen.model';
import PartiePol from '../models/partiePol.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private _partiesPol: AngularFirestoreCollection<PartiePol>
  parties: Observable<PartiePol[]>;

  constructor(private afs: AngularFirestore) {
    this._partiesPol = afs.collection<PartiePol>('parties');
    this.parties = this._partiesPol.valueChanges();
  }

  addPartie(partie: PartiePol) {


    this.afs.collection(`parties`, ref => ref.where('nom', "==", partie.nom)).snapshotChanges().subscribe(res => {
      if (res.length != 0) {
        this._partiesPol.add(partie);
      }

    });
  }

  deletePartie(nomPartie: string) {
    // let index = this._partiesPol.findIndex(e => e.nom = nomPartie);
    // this._partiesPol.splice(index, 1);
  }


  public get partiePol(): AngularFirestoreCollection<PartiePol> {
    return this._partiesPol;
  }

  vote(citoyen: Citoyen, nomPartie: string) {
    // let partie: PartiePol;
    // this._partiesPol.forEach(e => {
    //   if (e.nom == nomPartie) partie = e;
    //   if (e.citoyens.find(c => c.nom == citoyen.nom) != null) {
    //     return;
    //   }
    // })

    // partie.citoyens.push(citoyen);
  }

}
