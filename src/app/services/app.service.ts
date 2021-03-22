import { Injectable } from '@angular/core';
import Citoyen from '../models/Citoyen';
import PartiePol from '../models/PartiePol';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  private _partiesPol: Array<PartiePol>

  constructor() {
    this._partiesPol = Array.from({ length: 5 }, (_, i) => new PartiePol(`${i}`, i.toString().repeat(10)))
  }

  addPartie(partie: PartiePol) {
    if (this._partiesPol.find(e => e.nom == partie.nom) != null)
      return;

    this._partiesPol.push(partie);
  }

  deletePartie(nomPartie: string) {
    let index = this._partiesPol.findIndex(e => e.nom = nomPartie);
    this._partiesPol.splice(index, 1);
  }


  public get partiePol(): Array<PartiePol> {
    return this._partiesPol;
  }

  vote(citoyen: Citoyen, nomPartie: string) {
    let partie: PartiePol;
    this._partiesPol.forEach(e => {
      if (e.nom == nomPartie) partie = e;
      if (e.citoyens.find(c => c.nom == citoyen.nom) != null) {
        return;
      }
    })

    partie.citoyens.push(citoyen);
  }

}
